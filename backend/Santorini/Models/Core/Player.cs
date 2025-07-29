namespace Santorini.Models.Core
{
    public class Player (int id)
    {
        private enum ActionPhase
        {
            None,
            Move,
            Build
        }
        
        //public String Name { get; }
        public int Id { get; } = id;
        private int CurrentWorker = -1;
        private ActionPhase Phase = ActionPhase.None;
        public Worker[] Workers { get; set; } = CreateWorkers(id);
        private static Worker[] CreateWorkers(int id) => 
            [ new Worker(id), new Worker(id) ];
        

        public void MoveWorker(int workerNo, Position position)
        {
            var worker = Workers[workerNo];
            worker.Position = position;
        }

        public static void Build(int workerNo, Position position, Cell cell, int level)
        {
            cell.Build(level);
        }
        
    }
}

