using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : IdentityDbContext<User, Role, int, IdentityUserClaim<int>, UserRole, IdentityUserLogin<int>,
     IdentityRoleClaim<int>, IdentityUserToken<int>>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Movie> Movies { get; set; }
        public DbSet<Projection> Projections { get; set; }
        public DbSet<Hall> Halls { get; set; }
        public DbSet<Seat> Seats { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<User>()
                .HasMany(ur => ur.UserRoles)
                .WithOne(u => u.User)
                .HasForeignKey(ur => ur.UserId)
                .IsRequired();

            builder.Entity<Role>()
                .HasMany(ur => ur.UserRoles)
                .WithOne(u => u.Role)
                .HasForeignKey(ur => ur.RoleId)
                .IsRequired();




            builder.Entity<Movie>()
                .HasMany(m => m.Projections)
                .WithOne(pr => pr.Movie)
                .HasForeignKey(m => m.MovieId)
                .OnDelete(DeleteBehavior.Cascade);

            // builder.Entity<Projection>()
            //     .HasOne(pr => pr.Movie)
            //     .WithMany(pr => pr.Projections)
            //     .HasForeignKey(pr => pr.MovieId)
            //     .OnDelete(DeleteBehavior.Restrict)
            //     .IsRequired();



            builder.Entity<Hall>()
                .HasMany(h => h.Projections)
                .WithOne(pr => pr.Hall)
                .HasForeignKey(pr => pr.HallId)
                .OnDelete(DeleteBehavior.Cascade);

            // builder.Entity<Projection>()
            //     .HasOne(pr => pr.Hall)
            //     .WithMany(h => h.Projections)
            //     .HasForeignKey(pr => pr.HallId)
            //     .OnDelete(DeleteBehavior.Restrict)
            //     .IsRequired();



            builder.Entity<Hall>()
                .HasMany(h => h.Seats)
                .WithOne(h => h.Hall)
                .HasForeignKey(s => s.HallId)
                .OnDelete(DeleteBehavior.Cascade);

            // builder.Entity<Seat>()
            //     .HasOne(s => s.Hall)
            //     .WithMany(h => h.Seats)
            //     .HasForeignKey(s => s.HallId)
            //     .IsRequired();
        }


    }
}