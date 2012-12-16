var jsoauth = require('./lib/jsOauth.js');
var system = require('system');
if(system.args[1].length < 3){
quit();
}
var status = system.args[1].substring(0,140);

var op = {
       consumerKey : 'QGtGlK9DI32dRfDMywOvzg',
       consumerSecret : 'MFotaZ7qc6twPYa3PsbkzKMBFusIB55nVuqsJHkqU',
    accessTokenKey : '978038688-7QKaPqI7GU0j3unVUDyG23NupQ6CV2X9b0RQMmQc',
    accessTokenSecret : 'ZGS5q9KtQbdzcuEcXESQS0ZkWjcoRqzKrf4jHoJL4'
      };

var oauth = jsoauth.OAuth(op);

oauth.post('https://api.twitter.com/1/statuses/update.json?status=' + status, { 'status' : status});

