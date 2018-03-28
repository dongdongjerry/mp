const phantom = require('phantom');



//访问的url
const url = encodeURI(`https://s.taobao.com/search?q=%E5%B0%8F%E7%B1%B3&imgfile=&commend=all&ssid=s5-e&search_type=item&sourceId=tb.index&spm=a21bo.2017.201856-taobao-item.1&ie=utf8&initiative_id=tbindexz_20170306`);
//设置用户代理头
const userAgent = `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36`
try {
    //提供async环境
    (async function() {
        //创建实例
        const instance = await phantom.create()
        //创建页面容器
        const page = await instance.createPage()
        //设置
        page.setting("userAgent", userAgent)
        //判断是否访问成功
        const status = await page.open(url);
        let code = 1;
        if (status !== 'success') {
            //访问失败修改状态码
            code = -1;
        } else {
            //获取当前时间
            var start = Date.now();
            var result = await page.evaluate(function() {
                var count = 1;
                return $('p')
            })
            let data = {
                code: code,
                bookNumber: "5443",
                url: url,
                time: Date.now() - start,
                dataList: result
            }
            console.log(JSON.stringify(data));
        }
        //退出实例
        await instance.exit();
    })()
} catch (e) {
    console.log(e)
}