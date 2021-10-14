import Path from 'path';

export default function serveStaticHtml (req, res,next){
    res.sendFile(Path.join(__dirname + '/index.html'));
}