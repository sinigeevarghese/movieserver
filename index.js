// 1)import json server - library
const jsonServer = require('json-server')

// 2)create path for db.json file using router method for storing data
const router = jsonServer.router("db.json")

// 3) create middleware to convert json to js - default()
const middleware = jsonServer.defaults()

//4) create json server
const mediaplayer_server = jsonServer.create()

// 5)server should use middleware and router
mediaplayer_server.use(middleware)
mediaplayer_server.use(router)

// 6) set port for server
const PORT = 3000 || process.env.PORT

// 7) run server
mediaplayer_server.listen(PORT, ()=>{
    console.log(`Server Running Successfully at port number ${PORT}`);
})