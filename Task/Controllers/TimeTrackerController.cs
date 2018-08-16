using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Task.Controllers
{
	public class TimeTrackerController : Controller
	{
		// GET: BookTime
		public ActionResult BookTime()
		{
			return View("BookTime");
		}
	}
}