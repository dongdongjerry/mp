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
        // console.info('Requesting', requestData.url);
    });
    const status = await page.open('https://www.taobao.com/');
    console.log(status)
    await page.includeJs('https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js');
    const content = await page.property('content');
    let result = await page.evaluate(function () {
       return $('img').length
    });
    console.log(result)
    // console.log(content)
    instance.exit();
})();
