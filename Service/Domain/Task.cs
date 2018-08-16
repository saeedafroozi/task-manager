using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Domain
{
	public class Task
	{
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Id { get; set; }
		public string Description { get; set; }
		public DateTime FinishDateTime { get; set; }
		public int SpentTime { get; set; }
	}
}
