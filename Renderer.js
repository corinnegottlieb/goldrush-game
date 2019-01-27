class Renderer {
    constructor(){}


    renderBoard(matrix){
        const source = $(`#goldRush-template`).html()
        const template = Handlebars.compile(source)
        let newHTML = template({matrix})
        $(`#board`).empty().append(newHTML) 
    }

    renderScores(score1, score2){
        $(`#score-board`).empty()
        $(`#score-board`).append(`<div id="score1" class="score" >${score1}</div>`)
        $(`#score-board`).append(`<div id="score2" class="score">${score2}</div>`)
    }
}
