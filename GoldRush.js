class GoldRush extends Matrix {
    constructor() {
        super(r,c)
        this.matrix = this.loadBoard(r,c)
        this.player = {
            1: {
                score: 0,
                x: 0,
                y: 0
            },
            2: {
                score: 0,
                x: r-1,
                y: c-1
            }
        }

        this.dir = {
            "up": { x: -1, y: 0 },
            "down": { x: 1, y: 0 },
            "left": { x: 0, y: -1 },
            "right": { x: 0, y: 1 }
        }

    }

    loadBoard(rows,columns) {
        this.matrix = []
        for (let r = 0; r < rows; r++) {
            this.matrix.push([])
            for (let c = 0; c < columns; c++) {
                this.matrix[r].push('.')
            }
        }
        this.matrix[0][0] = 1
        this.matrix[4][4] = 2
        this.generateCoins()
        this.generateWalls()
        return this.matrix
    }
    generateCoins() {
        this.coinCount = 0
        while (this.coinCount < 5) {
            let coinX = Math.floor((Math.random() * 4) + 1)
            let coinY = Math.floor((Math.random() * 4) + 1)
            if (this.matrix[coinX][coinY] === `.`) {
                this.matrix[coinX][coinY] = `c`
                this.coinCount++
            }
        }
    }

    generateWalls(){
        this.wallCount = 0
        while (this.wallCount < 5) {
            let wallX = Math.floor((Math.random() * 4) + 1)
            let wallY = Math.floor((Math.random() * 4) + 1)
            if (this.matrix[wallX][wallY] === `.`) {
                this.matrix[wallX][wallY] = `X`
                this.wallCount++
            }
        }
    }

    movePlayer(player, direction) {
        let newX = this.player[player].x + this.dir[direction].x
        let newY = this.player[player].y + this.dir[direction].y
        if (this.matrix[newX][newY] !== 1 &&
            this.matrix[newX][newY] !== 2 &&
            newY !== -1 &&
            newX !== -1 &&
            newY !== 5 &&
            newX !== 5 &&
            this.matrix[newX][newY] !== `X`) {
            this.matrix[this.player[player].x][this.player[player].y] = `.`
            this.player[player].x += this.dir[direction].x
            this.player[player].y += this.dir[direction].y
            if (this.matrix[this.player[player].x][this.player[player].y] === `c`) {
                this.matrix[this.player[player].x][this.player[player].y] = player
                this.player[player].score += 10
            }
            else this.matrix[this.player[player].x][this.player[player].y] = player

            return this.matrix
        }
    }


    

}

// const board = new GoldRush()
// board.print()
// console.log(board.player[1].score)
// console.log(board.player[2].score)
// board.movePlayer(1, "down")
// board.movePlayer(2, "left")
// board.print()
// console.log(board.player[1].score)
// console.log(board.player[2].score)
