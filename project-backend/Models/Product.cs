using System;
using System.Collections.Generic;

namespace MidTermBack.Models
{
    public partial class Product
    {
        public int Id { get; set; }
        public int? CategoryId { get; set; }
        public int? DeviceTypeId { get; set; }
        public string? Condition { get; set; }
        public string? Title { get; set; }
        public string? ProdDescription { get; set; }
        public int? Price { get; set; }
        public string? ImageFileName { get; set; }
        public int? UserId { get; set; }

        public virtual ProductCategory? Category { get; set; }
        public virtual DeviceType? DeviceType { get; set; }
        public virtual UserDetail? User { get; set; }
    }
}
