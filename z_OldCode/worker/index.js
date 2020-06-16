// connection keys
const keys = require('./keys');
// import client
const redis = require('redis');

// redis client connection
const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
});

const sub = redisCleint.duplicate();


// working fucntioon
function fib(index) {
    if (index < 2) return 1;
    return fib(index - 1) + fib(index - 2);
}

// watch for messages
sub.on('message', (channel, message) => {
    redisClient.hset('values', message, fib(parseInt(message)));
});
// anytime you see an insert event into redis, run your stuff.
sub.subscribe('insert');