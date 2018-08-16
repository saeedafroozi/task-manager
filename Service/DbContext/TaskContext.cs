namespace DataAccess.DataBaseContext
{
	using System;
	using System.ComponentModel.DataAnnotations.Schema;
	using System.Data.Entity;
	using System.Linq;
	using Service.Domain;
	using MySql.Data.Entity;

	public partial class TaskContext : DbContext
	{
		public TaskContext():base("name=task")
		{

		}

		public virtual DbSet<Task> Tasks { get; set; }


		protected override void OnModelCreating(DbModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Service.Domain.Task>().HasKey(u => u.Id);
			modelBuilder.Entity<Service.Domain.Task>().Property(u => u.Id)
				.HasDatabaseGeneratedOption(
					DatabaseGeneratedOption.Identity);
		}
	}
}
