// 需要packages: express, fs, simple-html-template
// 安裝指令: npm install <上述package名稱>
// 啟動指令(進到該資料夾之後): node app.js

var express = require('express');
var templ = require('simple-html-template');
const fs = require('fs');

app = express();
app.use('/', express.static(__dirname + '/')); // 將所有檔案視為 static (WARNING:可能會有網安問題...)
app.engine('html', templ) // 告訴 engine 去 render 所有 .html 檔
app.set('views', 'views') // 指定 views 在 views 資料夾
app.set('view engine', 'html') // 讓 template engine 去 handle 所有 views 裡面的 .html檔

app.set('open_tag','<#'); // 可以自己決定要不要改變抽換變數的起始標籤 (預設: <?)
app.set('close_tag','#>'); // 可以自己決定要不要改變抽換變數的結尾標籤 (預設: />)

// 圖片放在 views/img 資料夾 (用資料夾分類好)
// 進入 首頁(ex. 127.0.0.1:port/) 時，顯示所有收藏
app.get('/', function (req, res) {
    var print_titles = '<table id="myqueries" class="table table-hover"><thead><tr><th>最後編輯日期</th><th>名稱</th><th>總頁數</th></tr></thead>';
    var target_folder = __dirname+'/views/img/';
	fs.readdirSync(target_folder).forEach(file => {
        var target_file = target_folder + file + '/';
        var this_pages = 0;
        var this_date = new Date('2000');
        var files = fs.readdirSync(target_file);
        this_pages = files.length;
        for(var i=0; i<files.length; i++){
            stats = fs.statSync(target_file + files[i]);
            var fdate = new Date(stats.mtime);
            if(fdate > this_date){
                this_date = fdate;
            }
        }
        this_date = this_date.toISOString().split('T')[0];
        print_titles += '<tr><td>'+this_date+'</td><td><a href="'+file+'">'+file+'</a></td><td>'+this_pages+'</td></tr>'; // 建立所有<a>
        console.log('<tr><td>'+this_date+'</td><td><a href="'+file+'">'+file+'</a></td><td>'+this_pages+'</td></tr>');
    });
    print_titles += '</table>';
    res.render('index', { these_titles: print_titles });
});

// 進入 收藏(ex. 127.0.0.1:port/收藏) 時，顯示所有圖片
app.get('/:name', function (req, res) {
    var print_images = '';
    var target_folder = './views/img/'+req.params.name+'/';
	fs.readdirSync(target_folder).forEach(file => {
        var target_file = target_folder + file;
        print_images += '<div><img src="'+target_file+'"></img></div>'; // 建立所有<img>
    })
    
    res.render('reading', { these_images: print_images });
});


// 網頁開在 8888通訊埠 (開啟方式：http://127.0.0.1:8888/)
var myPort = 8888;
app.listen(myPort, function (){
  console.log('App listening on port '+myPort+'...(press Ctrl+C to exit)');
});







