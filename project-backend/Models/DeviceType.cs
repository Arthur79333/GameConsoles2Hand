using System;
using System.Collections.Generic;

namespace MidTermBack.Models
{
    public partial class DeviceType
    {
        public DeviceType()
        {
            Products = new HashSet<Product>();
        }

        public int Id { get; set; }
        public string? Device { get; set; }

        public virtual ICollection<Product> Products { get; set; }
    }
}
