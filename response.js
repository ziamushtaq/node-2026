const http = require("http");
const age = 28;

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html");
    res.write(`
        <html>
            <head>
                <title>
                    Code by ZIA
                </title>
            </head>
            <body>
                <h1>
                    HI IM Try to learn NOde js.
                </h1>
                <h2>My age is `+ age +`</h2>
            </body>
        </html>
        `
    )
    res.end();
});

server.listen(4800);