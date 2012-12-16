A command line tool to tweet to your twitter account. it needs RingoJS.

Go to https://dev.twitter.com/apps, make an app, then go to the details page.
you should see something like this:
<img src = "https://googledrive.com/host/0B_djAcBpTBAccDF4N3Ayc2YxWDQ/twitter-dev-app.png" border="0"/>

Take "Consumer key", "Consumer secret", "Access token" and "Access token secret", and put them
in twit.js file.
Make sure Access level is "Read and Write" in the settings page.
that's it, you can now call the script and tweet:
```bash
sh tweet.sh "my tweet"
```
