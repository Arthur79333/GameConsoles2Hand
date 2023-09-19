using System;
using System.Collections.Generic;

namespace MidTermBack.Models
{
    public partial class UserDetail
    {
        public UserDetail()
        {
            Products = new HashSet<Product>();
        }

        public int Id { get; set; }
        public string? Fname { get; set; }
        public string? Lname { get; set; }
        public string? Phone { get; set; }
        public string? Email { get; set; }
        public string? Pass { get; set; }
        public string? City { get; set; }

        public virtual ICollection<Product> Products { get; set; }
    }
}
