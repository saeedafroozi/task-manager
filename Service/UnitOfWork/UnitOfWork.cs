using DataAccess.DataBaseContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.UnitOfWork
{
   public class UnitOfWork:IUnitOfWork
    {
        private readonly TaskContext _dbContext;
        public UnitOfWork(TaskContext dbContext)
        {
            this._dbContext = dbContext;
        }
        public bool Commit() {
            try
            {
                return Convert.ToBoolean(_dbContext.SaveChanges());
            }
            catch (Exception ex)
            {

                return false;
            }
        }
    }
}
