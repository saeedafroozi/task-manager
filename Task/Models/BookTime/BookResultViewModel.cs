using ReactPractice.Models.BookTime;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Task.Models.BookTime
{
	public class BookResultViewModel
	{
		public List<BookTimeViewModel> BookResults { get; set; }
		public int Total { get; set; }
	}
}