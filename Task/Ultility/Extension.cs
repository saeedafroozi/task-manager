using ReactPractice.Models.BookTime;
using Service.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Task.Models.BookTime;

namespace Task.Ultility
{
	public static class Extension
	{
		public static List<BookTimeViewModel> ToBookTimeViewModel(this IEnumerable<Service.Domain.Task> tasks)
		{
			return tasks.Select(x => new BookTimeViewModel
			{
				Description = x.Description,
				FinishTime = x.FinishDateTime,
				RunningTime = x.SpentTime,
				Id = x.Id
			}).ToList();
		}

		public static BookResultViewModel ToBookListViewModel(this TaskResultDto task)
		{
			return new BookResultViewModel
			{
				BookResults = task.Tasks.ToBookTimeViewModel(),
				Total = task.Total
			};
		}
	}

}