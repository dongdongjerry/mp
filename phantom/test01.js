var page = require('webpage').create();
phantom.outputEncoding="utf-8";//指定编码方式
page.open("http://news.163.com/", function(status) {
    if ( status === "success" ) {
        var res = page.evaluate(function(){
            var d = '';
            //匹配 DOM 查询语句 a 标签
            var patternA = 'ul li.newsdata_item div.ndi_main div a img';
//匹配 DOM 查询语句 新闻内容 div
            var patternNews = 'ul li.newsdata_item div.ndi_main div div div.news_title h3 a';
            //匹配 DOM 查询语句 新闻标签 div
            var patternNewsClass = 'ul li.newsdata_item div.ndi_main div div div.news_tag strong a';
            var patternNewsKeyWords = 'ul li.newsdata_item div.ndi_main div div div.news_tag div a';
            var c = document.querySelectorAll(patternA);//查询
            var l = c.length;
            //遍历输出
            for(var i =0;i<l;i++){
                d = d + "标题："+c[i].alt+'\n';
                d = d + "图片链接: "+c[i].src+'\n';
                d = d + '\n';
            }
            c = document.querySelectorAll(patternNews);//查询
            l = c.length;
            //遍历输出
            for(var i =0;i<l;i++){
                d +="新闻链接："+c[i].href+'\n';
                d = d + '\n';
            }
            c = document.querySelectorAll(patternNewsClass);//查询
            l = c.length;
            //遍历输出
            for(var i =0;i<l;i++){
                d +="新闻类别："+c[i].innerText+'\n';
                d = d + '\n';
            }
            c = document.querySelectorAll(patternNewsKeyWords);//查询
            l = c.length;
            //遍历输出
            for(var i =0;i<l;i++){
                d +="新闻关键词："+c[i].innerText+'\n';
                d +="关键词链接："+c[i].href+'\n';
                d = d + '\n';
            }
            d = d + '\n';
            return d;
        });//输出网页标题

        console.log(res);
    } else {
        console.log("网页加载失败");
    }
    phantom.exit(0);//退出系统
});