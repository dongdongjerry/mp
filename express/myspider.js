console.time("spider");
var http = require('http');
var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
var index = 0;
var url = "http://news.szu.edu.cn/xyxw/sdyw/350.htm";

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
            let list = $('.news-list a');
            for (let i=0;i<list.length;i++){
                console.log(list.eq(i).text() + list.eq(i).attr('href'));
            }
            //console.log($('.Next').attr('href'));
            let regex = /sdyw/;
            let next = $('.Next').attr('href');
            /*console.log(!regex.exec(next));*/

            if (!regex.exec(next)){
                let nextLink = "http://news.szu.edu.cn/xyxw/" + next;
            }
            let nextLink = "http://news.szu.edu.cn/xyxw/sdyw/" + next;


            console.log("-----------------------------------------------------------");
            if (index<10){
                index++;
                fetchPage(nextLink);
            }
        });
    });
};
fetchPage(url);

console.timeEnd("spider");




/*
request({uri:url},function (err,response,body) {
	var html = response.body;
	var $ = cheerio.load(html);
	console.log($(".news-details__title"));
});*/
