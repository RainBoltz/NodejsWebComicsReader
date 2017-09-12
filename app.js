// 需要packages: express, fs
// 安裝指令: npm install <上述package名稱>

var express = require('express');
app = express(); 
app.use('/', express.static(__dirname + '/')); // 把當前資料夾當成資料來源...

const fs = require('fs');

// 圖片放在 img資料夾 裡
target_folder = './img/'
app.get('/', function (req, res) {
	fs.readdirSync().forEach(file => {
	  target_file = target_folder + file
	  res.write('<div><img src="'+target_file+'"></img></div>')
	})
});

// 網頁開在 8080通訊埠 (開啟方式：http://127.0.0.1:8080/)
app.listen(8080);
