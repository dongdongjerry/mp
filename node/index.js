let http = require('http');
let server = http.createServer();
server.on('request',(req,res)=>{
    if(req.url !== "/favicon.ico"){
        console.log(req.url);
    }
    res.end();
});
server.on('customEvent',(arg1,arg2,arg3)=>{
    console.log("自定义时间触发");
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
});
server.emit('customEvent','自定义参数1','自定义参数2','自定义参数3');
server.listen(1337);