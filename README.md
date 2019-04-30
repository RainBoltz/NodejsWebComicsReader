# NodejsWebComicsReader
Read Comics (well, usually downloaded by [98comics-downloader](https://github.com/RainBoltz/98comics-downloader)) on local website.

## Requirements
install the packages with these commands:
```bash
npm install express
npm install ./simple-template-handler
```
- [express](https://www.npmjs.com/package/express) : Fast, unopinionated, minimalist web framework for NodeJS.
- [simple-template-handler](https://github.com/RainBoltz/simple-html-template) : A bug-fixed version of [simple-html-template](https://github.com/anisoftcorporation/simple-html-template)
    
## Usage
1. put the comics folders into the ` ./view ` folder
    
2. check the images naming patterns
    > for ` aaa_bbb.jpg `:
    >     - `aaa` is the chapter number
    >     - `bbb` is the page number
   
3. start the server with the command:
    ```bash
    node app
    ```
    
4. open the browser, URL: [127.0.0.1:8888](http://127.0.0.1:8888)
    *note that we can change the port number in app.js:*
    ```javascript
    var myPort = 8888; //port setting here
    app.listen(myPort, function (){
      console.log('App listening on port '+myPort+'...(press Ctrl+C to exit)');
    });
    ```
    
5. if we want to specify a chapter (chapter 12, for example), we will add ` #ch12 ` to the end of url
    > from `http://127.0.0.1:8888/comic_name/` to `http://127.0.0.1:8888/comic_name/#ch12`
    
    
    
    
    