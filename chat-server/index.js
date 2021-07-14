const  express = require('express');
const http = require('http');
const socketio = require('socket.io');

const cors = require('cors');

const app = express();
const server = http.createServer(app);


const io = socketio(server,{
    cors:{
        origin :'*',
    }
})

io.on('connection',(socket)=>{
console.log(socket.id,'connection');
})

app.use(cors());




server.listen(process.env.PORT || 3030);