using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Text.Unicode;
using System.Threading.Tasks;
using Data.Dtos;
using DatingApp.Data;
using DatingApp.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
   
    public class AccountController : BaseApiController
    {
        private readonly DataContext _dataContext;
        public AccountController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
        
        [HttpPost("register")]
        public async Task<ActionResult<AppUser>> Register(RegisterDto registerDto)
        {
            if (await IsUniqueness(registerDto.UserName))
                return BadRequest("User is taken");
            using var hmac = new HMACSHA512();
            AppUser appUser = new AppUser
            {
                UserName = registerDto.UserName.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
                PasswordSalt = hmac.Key
            };
            _dataContext.Add(appUser);
            await _dataContext.SaveChangesAsync();
            return appUser;
        }
        [HttpPost("login")]
        public async Task<ActionResult<AppUser>> Login(LoginDto loginDto)
        {
            var User = _dataContext.Users.SingleOrDefault(x => x.UserName == loginDto.UserName);
            if (User == null)
                return Unauthorized("Invalid username");
            using var hmac= new HMACSHA512(User.PasswordSalt);
            var HashedPassword = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));
            for(int i = 0; i < HashedPassword.Length; i++)
            {
                if (HashedPassword[i] != User.PasswordHash[i])
                    return Unauthorized("Invalid Password");
            }
            return User;

        }
        private async Task<bool> IsUniqueness(string UserName)
        {
              return await _dataContext.Users.AnyAsync(x => x.UserName == UserName.ToLower());
        }

    }
}
