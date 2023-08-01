//importamos de app.js
import app from "./app"

//que escuche el puerto
//llamamos el seting de app.js
app.listen(app.get('port'))

console.log('server on port', app.get('port') );