namespace Santorini.Models.Core
{
    public class Worker (int owner)
    {
        public int Owner { get; } = owner;
        public Position Position { get; set; } = new Position { Row = -1, Column = -1 };
        
    }
}

