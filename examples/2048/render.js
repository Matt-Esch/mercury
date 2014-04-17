var h = require("../../index.js").h

var rows = [0, 1, 2, 3]
var cells = [0, 1, 2, 3]

module.exports = render

function render(state) {
    return h(".2048-wrapper", [
        h("link", {
            rel: "stylesheet",
            href: "https://rawgithub.com/raynos/mercury/master" +
                "/examples/2048/style.css"
        }),
        h(".container", [
            header(state),
            gameScreen(state),
            footer(state)
        ])
    ])
}

function header(state) {
    return h("div", [
        h(".heading", [
            h("h1.title", "2048"),
            h(".scores-container", [
                h(".score-container", "0"),
                h(".best-container", "0")
            ])
        ]),
        h(".above-game", [
            h("p.game-intro", [
                "Join the numbers and get to the ",
                h("strong", "2408 tile!")
            ]),
            h("a.restart-button", "New Game")
        ])
    ])
}

function gameScreen(state) {
    return h(".game-container", [
        h(".game-message", [
            h("p"),
            h(".lower", [
                h("a.keep-playing-button", "Keep going"),
                h("a.retry-button", "Try again")
            ])
        ]),
        h(".grid-container", rows.map(function () {
            return h(".grid-row", cells.map(function () {
                return h(".grid-cell")
            }))
        })),
        h(".tile-container")
    ])
}

function footer(state) {
    return h("div", [
        h("p.game-explanation", [
            h("strong.important", "How to play:"),
            " Use your ",
            h("strong", "arrow keys"),
            " to move the tiles. When two tiles with the same ",
            "number touch, they ",
            h("strong", "merge into one!")
        ]),
        h("hr"),
        h("p", [
            h("strong.important", "Note:"),
            " This site is NOT the official version of 2048. ",
            "This is a clone of 2048 & a re-implementation ",
            "using the `mercury` framework."
        ]),
        h("p", [
            "Created by ",
            h("a", {
                href: "http://github.com/Raynos",
                target: "_blank"
            }, "Raynos"),
            " Based on ",
            h("a", {
                href: "http://gabrielecirulli.github.io/2048/",
                target: "_blank"
            }, "2048 by Gabriele Cirulli.")
        ])
    ])
}