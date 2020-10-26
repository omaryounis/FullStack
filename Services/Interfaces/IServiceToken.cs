using DatingApp.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Services.Interfaces
{
    public interface IServiceToken
    {
        string CreateToken(AppUser appUser);
    }
}
