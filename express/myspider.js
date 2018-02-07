console.time("spider");
var http = require('https');
const phantom = require('phantom');//导入模块
var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
var index = 0;
// var url = "http://news.szu.edu.cn/xyxw/sdyw/350.htm";
let url = 'https://bangpai.taobao.com/group/thread/400769-7367089.htm#reply60023761'
console.log(phantom)
let  fetchPage = x =>{
    startRequest(x);
};

let startRequest = x =>{
    http.get(x,function(req,res){
        let html='';
        req.setEncoding('UTF-8');
        req.on('data',function(data){
            html+=data;
        });
        req.on('end',function () {
            let  $ = cheerio.load(html);
        });
    });
};
fetchPage(url);

console.timeEnd("spider");


(async function() {
    const instance = await phantom.create();
    const page = await instance.createPage();
    await page.on('onResourceRequested', function(requestData) {
        console.info('Requesting', requestData.url);
    });

    const status = await page.open('https://s.taobao.com/search?q=%E5%B0%8F%E7%B1%B3&imgfile=&commend=all&ssid=s5-e&search_type=item&sourceId=tb.index&spm=a21bo.2017.201856-taobao-item.1&ie=utf8&initiative_id=tbindexz_20170306');
    if (status !== 'success') {
        console.log('访问失败');
        return;
    } else {
        let start = Date.now();
        let result = await page.evaluate(function() {
            return document.title
        });
        let data = {
            cose: 1,
            msg: "抓取成功",
            time: Date.now() - start,
            dataList: result
        }
        console.log(JSON.stringify(data));
        await instance.exit();
    }
})();

/*
request({uri:url},function (err,response,body) {
	var html = response.body;
	var $ = cheerio.load(html);
	console.log($(".news-details__title"));
});*/
