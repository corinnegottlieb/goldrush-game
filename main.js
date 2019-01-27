const renderer = new Renderer()
const goldRush = new GoldRush()

const loadPage = () => {
    goldRush.loadBoard(5,5)
    renderer.renderBoard(goldRush.matrix)
    renderer.renderScores(goldRush.player[1].score, goldRush.player[2].score)
}
// const box = document.getElementsByClassName(`box`)
// const player1 = function () {
//     if (box.innerHTML === 1) {
//         box.setAttribute('id',`player1` )
// }}

$(document).keypress(function (e) {
    if (e.which == 119) {
        goldRush.movePlayer(1, "up")
    }
    if (e.which == 115) {
        goldRush.movePlayer(1, "down")
    }
    if (e.which == 97) {
        goldRush.movePlayer(1, "left")
    }
    if (e.which == 100) {
        goldRush.movePlayer(1, "right")
    }
    if (e.which == 105) {
        goldRush.movePlayer(2, "up")
    }
    if (e.which == 107) {
        goldRush.movePlayer(2, "down")
    }
    if (e.which == 106) {
        goldRush.movePlayer(2, "left")
    }
    if (e.which == 108) {
        goldRush.movePlayer(2, "right")
    }
    renderer.renderBoard(goldRush.matrix)
    renderer.renderScores(goldRush.player[1].score, goldRush.player[2].score)
})

$(`#startButton`).click(function () {
    let rows = $(`#rowNum`).val()
    let columns = $(`#colNum`).val()
    goldRush.loadBoard()
    renderer.renderBoard(goldRush.matrix)
    renderer.renderScores(goldRush.player[1].score, goldRush.player[2].score)

})

loadPage()