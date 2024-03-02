import app from './app.js'
import { createServer } from 'http'
import { PORT } from './config.js' 

const server = createServer(app)

server.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})