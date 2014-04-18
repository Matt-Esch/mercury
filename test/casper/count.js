var casper = require("casper").create()
var dump = require("utils").dump

function assert(bool, message) {
    if (!bool) {
        throw new Error(message)
    }
}

var uri = "file:///home/raynos/projects/mercury/examples/count.html"
casper.start(uri, function () {
    var info = this.getElementInfo(".counter")

    assert(info.text.indexOf('value: 0') !== -1, "value not 0")
    
    this.click('.button')

    this.wait(50, function () {
        var info = this.getElementInfo(".counter")

        assert(info.text.indexOf('value: 1') !== -1,
            "value not 1")
    })
})

casper.run(function () {
    console.log("OK (count)")
    this.exit()
})
