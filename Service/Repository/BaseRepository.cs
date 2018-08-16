using DataAccess.DataBaseContext;
using Service.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Repository
{
	public class BaseRepository<T> : IRepository<T>, IDisposable where T : class
	{
		protected TaskContext _dbContext;

		public BaseRepository(TaskContext dbContext)
		{
			this._dbContext = dbContext;
		}
		public void Add(T entity)
		{
			_dbContext.Set<T>().Add(entity);
		}
		public void Update(T entity)
		{
			_dbContext.Set<T>().Attach(entity);
			_dbContext.Entry(entity).State = System.Data.Entity.EntityState.Modified;
		}

		public void Delete(T entity)
		{
			_dbContext.Entry(entity).State = System.Data.Entity.EntityState.Deleted;
		}
		public T Find(int id)
		{
			return _dbContext.Set<T>().Find(id);
		}
		public IQueryable<T> Where(System.Linq.Expressions.Expression<Func<T, bool>> predicate)
		{
			try
			{
				return _dbContext.Set<T>().AsNoTracking().Where(predicate);
			}
			catch
			{
				return null;
			}
		}
		public IQueryable<T> Select()
		{
			try
			{
				return _dbContext.Set<T>().AsQueryable();
			}
			catch
			{
				return null;
			}
		}
		public IQueryable<TResult> Select<TResult>(System.Linq.Expressions.Expression<Func<T, TResult>> selector)
		{
			try
			{
				return _dbContext.Set<T>().Select(selector);
			}
			catch
			{
				return null;
			}
		}

		public void Save()
		{
			_dbContext.SaveChanges();
		}

		public void Dispose()
		{
			Dispose(true);
			GC.SuppressFinalize(this);
		}

		protected virtual void Dispose(bool disposing)
		{
			if (disposing)
			{
				if (this._dbContext != null)
				{
					this._dbContext.Dispose();
					this._dbContext = null;
				}
			}
		}

		~BaseRepository()
		{
			Dispose(false);
		}

	}
}
