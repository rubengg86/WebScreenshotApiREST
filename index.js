const express = require("express");
const puppeteer = require('puppeteer');
const app = express();
app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});

app.get('/do_screenshot', function (req, res) {
    //res.send('UrL '+ req.params.url);
    let url = req.query.url;
    let show = req.query.show;
    let path = req.query.path;
    if(!path){
        path = "";
    }
    console.log('Procesando: '+url);
    let nname = url.split('/');
    //console.log(nname);
    let name = nname[nname.length - 2];
    let filename=path+name+".png";
    if(url){
        (async () => {
            const browser = await puppeteer.launch({args: ['--disable-setuid-sandbox', '--no-sandbox']});
            const page = await browser.newPage();
            page.on('dialog', async dialog => {
                await dialog.dismiss(); 
            });
            page.once('load', () => 
                console.log('Page loaded!'),

                setTimeout(() => {
                    if(show=="true"){
                        page.screenshot({path: filename,fullPage :true}).then(img=>{
                            res.writeHead(200, {
                                'Content-Type': 'image/png',
                                'Content-Length': img.length
                              });
                              res.end(img); 
                        })
                    }else{
                        page.screenshot({path: filename,fullPage :true});
                        res.send('Saved to: '+filename);
                    }
                    
                    
                    
                }, 3000),
                setTimeout(() => {
                    browser.close()
                    
                }, 5000)

               
            );
            
            await page.goto(url);
            
          })();
    }
  });
