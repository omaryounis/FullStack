using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.Data;
using DatingApp.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BugyController : BaseApiController
    {
        private readonly DataContext dataContext;

        public BugyController(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }
        [HttpGet]
        [Authorize]
        public ActionResult<string> GetSecret()
        {
            return "Secret text";
        }
        [HttpGet("not-found")]
        public ActionResult<AppUser> GetNotFound()
        {
            var user= dataContext.Users.Find(-1);
            if (user == null)
                return NotFound();
            return Ok(user);
        }

        [HttpGet("server-error")]
        public ActionResult<string> ServerError()
        {
                var user = dataContext.Users.Find(-1).ToString();
                return user;
        }
        [HttpGet("bad-request")]
        public ActionResult<string> BadRequest()
        {
            return BadRequest("it's bad request");
        }

    }
}
