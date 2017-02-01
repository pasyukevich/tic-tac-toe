class TicTacToe {
    constructor() {
        this.player="x";
        this.winner=null;
        this.location= [[],[],[]]
        this.counter=9;
    }

    getCurrentPlayerSymbol() {return this.player;}

    nextTurn(rowIndex, columnIndex) {
        if(this.location[rowIndex][columnIndex]) return;
        this.location[rowIndex][columnIndex]=this.player;
        this.counter--;
        if ((this.location[0][0]===this.location[1][1] && this.location[1][1]===this.location[2][2] && this.location[2][2]===this.player) ||
            (this.location[2][0]===this.location[1][1] && this.location[1][1]===this.location[0][2] && this.location[0][2]===this.player) ||
            (this.location[0][0]===this.location[1][0] && this.location[1][0]===this.location[2][0] && this.location[1][0]===this.player) ||
            (this.location[0][1]===this.location[1][1] && this.location[1][1]===this.location[2][1] && this.location[1][1]===this.player) ||
            (this.location[0][2]===this.location[1][2] && this.location[1][2]===this.location[2][2] && this.location[1][2]===this.player) ||
            (this.location[0][0]===this.location[0][1] && this.location[0][1]===this.location[0][2] && this.location[0][1]===this.player) ||
            (this.location[1][0]===this.location[1][1] && this.location[1][1]===this.location[1][2] && this.location[1][1]===this.player) ||
            (this.location[2][0]===this.location[2][1] && this.location[2][1]===this.location[2][2] && this.location[2][1]===this.player)  )
        {
            this.winner=this.player;
        }
            if (this.player == "x")  this.player = "o";
            else this.player = "x";
    }

    isFinished() {
          if(this.counter===0 || this.winner) return true;
          else return false;
    }

    getWinner() {return this.winner;}

    noMoreTurns() {
                if (this.counter===0) return true;
                return false;
    }

    isDraw() {
        if (!this.counter && !this.winner) return true;
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.location[rowIndex][colIndex]==="x" || this.location[rowIndex][colIndex]==="o" ) return this.location[rowIndex][colIndex];
        else return null;
    }
}
module.exports = TicTacToe;