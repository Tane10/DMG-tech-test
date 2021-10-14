const path = require("path")

function serveStaticHtml (req, res,next){
    res.sendFile(path.join(__dirname + '/index.html'));

    console.log(__dirname)
}


module.exports = serveStaticHtml;


'/Users/tillie/Documents/Josh/DMG-tech-test/src/api/controller/index.html'