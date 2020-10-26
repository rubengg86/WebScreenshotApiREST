# WebScreenshotApiREST
Create screenshots from any webpage with this api endpoint


## USAGE

node(or nodejs) index.js

### Take screenshot and save it

http://localhost:3000/do_screenshot/?url=http://github.com/TCx300_2/&show=true

### Available parameters

<b>url: </b> Url from do you want to take the screenshot<br>
<b>show: </b> boolean: if image will show in screen<br>
<b>path: </b> Path where script will save the screenshot, if null, image will be saved at root folder (the same of index.js)<br>

### Prerequisites

Requires npm modules <b>express</b> and <b>puppeteer</b>
