
using ReactPractice.Models.BookTime;
using Service.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Task.Models.BookTime;
using Task.Ultility;

namespace ReactPractice.WebApi
{
	public class TimeController : ApiController
	{
		TaskService taskService = new TaskService(new DataAccess.DataBaseContext.TaskContext());
		[HttpPost]
		public HttpResponseMessage Save(BookTimeViewModel model)
		{
			var response = taskService.AddTask(new Service.Domain.Task
			{
				Description = model.Description,
				FinishDateTime = model.FinishTime,
				SpentTime = model.RunningTime
			});
			if (response)
			{
				return Request.CreateResponse(HttpStatusCode.OK, true);
			}
			else
			{
				return Request.CreateResponse(HttpStatusCode.BadRequest, false);
			}
			
		}
		[HttpPost]
		public HttpResponseMessage Search(SearchViewModel model)
		{
			var response = taskService.Search(model.PageIndex, model.Key);
				return Request.CreateResponse(HttpStatusCode.OK,response?.ToBookListViewModel());
		}
	}
}
