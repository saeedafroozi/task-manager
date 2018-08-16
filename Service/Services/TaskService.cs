using DataAccess.DataBaseContext;
using DataAccess.Repository;
using DataAccess.UnitOfWork;
using Service.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services
{
	public class TaskService
	{
		private readonly IRepository<Domain.Task> _taskRepository;
		private readonly IUnitOfWork _unitOfWork;
		public TaskService(TaskContext dbContext)
		{
			this._taskRepository = new BaseRepository<Domain.Task>(dbContext);
			this._unitOfWork = new UnitOfWork(dbContext);
		}
		public bool AddTask(Domain.Task model)
		{
			_taskRepository.Add(model);
			return _unitOfWork.Commit();
		}
		public TaskResultDto Search(int pageIndex, string key)
		{
			key = key ?? string.Empty;
			IEnumerable<Domain.Task> tasks = _taskRepository.Where(x => x.Description.Contains(key)).OrderByDescending(x => x.Id).Skip((pageIndex - 1) * 5).Take(5).ToList();
			int total = _taskRepository.Where(x => x.Description.Contains(key)).Count();

			return new TaskResultDto
			{
				Tasks = tasks,
				Total = total
			};
		}

	}

}
