var jsoauth = require('./lib/jsOauth.js');
var system = require('system');
if(system.args[1].length < 3){
quit();
}
var status = system.args[1].substring(0,140);

var op = {
       consumerKey : 'O04uLA2kNYhp5PeYASvXXQ',
       consumerSecret : 'GzesG4IT8ZItqPY3tmVyFL0j4skJTX1AmuT18alX3RU',
    accessTokenKey : '35700271-EmFF2PV3D5w7Fz6Ld1dhot5ekkdBDXgZ72ONNKWAT',
    accessTokenSecret : 'mHPxPsHGgYW2Si0pQptPPfpzzBrQyhg5J0tqovFeU'
      };

var oauth = jsoauth.OAuth(op);

oauth.post('https://api.twitter.com/1/statuses/update.json?status=' + status, { 'status' : status});

