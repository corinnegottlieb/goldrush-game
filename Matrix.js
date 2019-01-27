class Matrix {
    constructor(numRows, numColumns) {
        this.numRows = numRows
        this.numColumns = numColumns
        this.matrix = this.generateMatrix(numRows, numColumns)
    }

    generateMatrix(numRows, numColumns) {
        let matrix = []
        let num = 1

        for (let r = 0; r < numRows; r++) {
            matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                matrix[r].push(num++)
            }
        }
        return matrix
    }

    print() {
        this.matrix.forEach(r => {
            let row = ""
            r.forEach(c => {
                row += c + "\t"
            })
            console.log(row)
        })
    }

    printRow(rowNum) {
        this.matrix[rowNum].forEach(c => console.log(c))
    }

    printColumn(colNum) {
        this.matrix.forEach(r => console.log(r[colNum]))
    }

    get(rowNum, colNum) {
        return this.matrix[rowNum][colNum]
    }

    alter(rowNum, colNum, value) {
        this.matrix[rowNum][colNum] = value
        this.print()
    }

    findCoordinate(value) {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] === value) {
                    return { x: j, y: i }
                }
            }
        }
    }


}
