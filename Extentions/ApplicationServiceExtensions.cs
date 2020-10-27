using DatingApp.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Services.Classes;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Extentions
{
   public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationService(this IServiceCollection services , IConfiguration config)
        {
            services.AddScoped<IServiceToken, ServiceToken>();
            services.AddDbContext<DataContext>(options =>
            {
                options.UseSqlServer(config.GetConnectionString("DefualtConnection"));
            });
            return services;
        }
    }
}
