var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port) {
    console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
    process.exit(1)
}

var server = http.createServer(function (request, response) {
    var parsedUrl = url.parse(request.url, true)
    var pathWithQuery = request.url
    var queryString = ''
    if (pathWithQuery.indexOf('?') >= 0) { queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
    var path = parsedUrl.pathname
    var query = parsedUrl.query
    var method = request.method

    /******** 从这里开始看，上面不要看 ************/

    console.log('有个傻子发请求过来啦！路径（带查询参数）为：' + pathWithQuery)

    if (path === '/') {
      response.statusCode = 200
      response.setHeader('Content-Type', 'text/html;charset=utf-8')
      response.write(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
   
      <title>Document</title>
      <style>
      .penguin {
        
        /* change code below */
        --penguin-skin: black;
        --penguin-belly: gray;
        --penguin-beak: yellow;
        /* change code above */
        
        position: relative;
        margin: auto;
        display: block;
        margin-top: 5%;
        width: 300px;
        height: 300px;
      }
      
      .penguin-top {
        top: 10%;
        left: 25%;
        background: var(--penguin-skin, gray);
        width: 50%;
        height: 45%;
        border-radius: 70% 70% 60% 60%;
      }
      
      .penguin-bottom {
        top: 40%;
        left: 23.5%;
        background: var(--penguin-skin, gray);
        width: 53%;
        height: 45%;
        border-radius: 70% 70% 100% 100%;
      }
      
      .right-hand {
        top: 0%;
        left: -5%;
        background: var(--penguin-skin, gray);
        width: 30%;
        height: 60%;
        border-radius: 30% 30% 120% 30%;
        transform: rotate(45deg);
        z-index: -1;
      }
      
      .left-hand {
        top: 0%;
        left: 75%;
        background: var(--penguin-skin, gray);
        width: 30%;
        height: 60%;
        border-radius: 30% 30% 30% 120%;
        transform: rotate(-45deg);
        z-index: -1;
      }
      
      .right-cheek {
        top: 15%;
        left: 35%;
        background: var(--penguin-belly, white);
        width: 60%;
        height: 70%;
        border-radius: 70% 70% 60% 60%;
      }
      
      .left-cheek {
        top: 15%;
        left: 5%;
        background: var(--penguin-belly, white);
        width: 60%;
        height: 70%;
        border-radius: 70% 70% 60% 60%;
      }
      
      .belly {
        top: 60%;
        left: 2.5%;
        background: var(--penguin-belly, white);
        width: 95%;
        height: 100%;
        border-radius: 120% 120% 100% 100%;
      }
      
      .right-feet {
        top: 85%;
        left: 60%;
        background: var(--penguin-beak, orange);
        width: 15%;
        height: 30%;
        border-radius: 50% 50% 50% 50%;
        transform: rotate(-80deg);
        z-index: -2222;  
      }
      
      .left-feet {
        top: 85%;
        left: 25%;
        background: var(--penguin-beak, orange);
        width: 15%;
        height: 30%;
        border-radius: 50% 50% 50% 50%;
        transform: rotate(80deg);
        z-index: -2222;  
      }
      
      .right-eye {
        top: 45%;
        left: 60%;
        background: black;
        width: 15%;
        height: 17%;
        border-radius: 50%; 
      }
      
      .left-eye {
        top: 45%;
        left: 25%;
        background: black;
        width: 15%;
        height: 17%;
        border-radius: 50%;  
      }
      
      .sparkle {
        top: 25%;
        left: 15%;
        background: white;
        width: 35%;
        height: 35%;
        border-radius: 50%;  
      }
      
      .blush-right {
        top: 65%;
        left: 15%;
        background: pink;
        width: 15%;
        height: 10%;
        border-radius: 50%;  
      }
      
      .blush-left {
        top: 65%;
        left: 70%;
        background: pink;
        width: 15%;
        height: 10%;
        border-radius: 50%;  
      }
      
      .beak-top {
        top: 60%;
        left: 40%;
        background: var(--penguin-beak, orange);
        width: 20%;
        height: 10%;
        border-radius: 50%;  
      }
      
      .beak-bottom {
        top: 65%;
        left: 42%;
        background: var(--penguin-beak, orange);
        width: 16%;
        height: 10%;
        border-radius: 50%;  
      }
      
      body {
        background:#c6faf1;
      }
      
      .penguin * {
        position: absolute;
      }
    </style>
    <div class="penguin">
      <div class="penguin-bottom">
        <div class="right-hand"></div>
        <div class="left-hand"></div>
        <div class="right-feet"></div>
        <div class="left-feet"></div>
      </div>
      <div class="penguin-top">
        <div class="right-cheek"></div>
        <div class="left-cheek"></div>
        <div class="belly"></div>
        <div class="right-eye">
          <div class="sparkle"></div>
        </div>
        <div class="left-eye">
          <div class="sparkle"></div>
        </div>
        <div class="blush-right"></div>
        <div class="blush-left"></div>
        <div class="beak-top"></div>
        <div class="beak-bottom"></div>
      </div>
    </div>)
  
      
  </body>
  </html>`)
        response.end()
    } else if (path === '/x') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/css;charset=utf-8')
        response.write(`body{ color: red; }`)
        response.end()
    } else {
        response.statusCode = 404
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.write(`你输入的路径不存在对应的内容`)
        response.end()
    }

    /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)