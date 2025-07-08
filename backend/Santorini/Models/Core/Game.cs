namespace Santorini.Models.Core
{
    public class Game
    {
        private int _turn { get; set; }
        private Board _board;
        private Player[] _players = new Player[2];

        public Game()
        {
	        _board = new Board();
            _turn = 1;
            for (var i = 0; i < 2; i++)
            { 
                var player = new Player(i + 1);
                _players[i] = player;
            }
        }
        
        


    }
}

