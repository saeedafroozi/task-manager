using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Dto
{
	public class TaskResultDto
	{
		public IEnumerable<Domain.Task> Tasks { get; set; }
		public int Total { get; set; }
	}
}
