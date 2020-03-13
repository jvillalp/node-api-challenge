const server = require('./server');

const PORT = 5500;

server.listen(PORT, () => {
    console.log(`\n** Server is listening on port ${PORT} **\n`)
})
