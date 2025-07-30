namespace Santorini.Models.Core
{
    public class Cell
    {
        private int _level;
        private bool _hasDome;
        private Worker? _worker;

        public Cell()
        {
            _level = 0;
            _hasDome = false;
            _worker = null;
        }

        public void SetDome()
        {
            _hasDome = true;
        }
        
        public bool HasDome()
        {
            return _hasDome;
        }

        public bool IsOccupied()
        {
            return _worker != null; 
        }

        public int GetHeight()
        {
            return _level;
        }

        public void PlaceWorker(Worker worker)
        {
            _worker = worker;
        }

        public void RemoveWorker()
        {
            _worker = null;
        }

        public Worker? GetWorker()
        {
            return _worker;
        }

        public void Build(int level)
        {
            _level = level;
        }
    }
}
