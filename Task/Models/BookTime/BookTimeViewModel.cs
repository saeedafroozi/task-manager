using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactPractice.Models.BookTime
{
	public class BookTimeViewModel
	{
		public int Id { get; set; }
		public int RunningTime { get; set; }
		public string Description{ get; set; }
		public DateTime FinishTime { get; set; }
	}

	

}