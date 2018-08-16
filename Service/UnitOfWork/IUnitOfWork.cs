using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccess.DataBaseContext;

namespace DataAccess.UnitOfWork
{
   public interface IUnitOfWork
    {
         bool Commit();
    }
}
