var page = require('webpage').create();
phantom.outputEncoding="utf-8";//指定编码方式
page.open("https://s.taobao.com/search?q=%E5%B0%8F%E7%B1%B3&imgfile=&commend=all&ssid=s5-e&search_type=item&sourceId=tb.index&spm=a21bo.2017.201856-taobao-item.1&ie=utf8&initiative_id=tbindexz_20170306", function(status) {
    if ( status === "success" ) {
        // console.log(typeof page.content);//输出网页
        let  $ = cheerio.load(page.content);
        console.log($('.items J_Items'))
    } else {
        console.log("网页加载失败");
    }
    phantom.exit(0);//退出系统
});