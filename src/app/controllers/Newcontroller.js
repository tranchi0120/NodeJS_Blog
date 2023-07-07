class NewController {
    // [ GET] /news
    index(req, res) {
        res.render('new')
    }

    // [GET] /news/blug
    show(req, res) {
        res.send('new detail')
    }
}

module.exports = new NewController