using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Repository
{
   public interface IRepository<T> where T:class
    {
        void Add(T entity);
        void Update(T entity);
        void Delete(T entity);
        T Find(int id);
        IQueryable<T> Where(System.Linq.Expressions.Expression<Func<T, bool>> predicate);
        IQueryable<T> Select();
        IQueryable<TResult> Select<TResult>(System.Linq.Expressions.Expression<Func<T, TResult>> selector);
        void Save();
    }
}
