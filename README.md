# WebScreenshotApiREST
Create screenshots from any webpage with this api endpoint


## USAGE

node(or nodejs) index.js

### Take screenshot and save it

http://localhost:3000/do_screenshot/?url=http://github.com/TCx300_2/&show=true

### Available parameters

<b>url: </b> Url from do you want to take the screenshot
<b>show: </b> boolean: if image will show in screen
<p>path: </b> Path where script will save the screenshot, if null, image will be saved at root folder (the same of index.js)
