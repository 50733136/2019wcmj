var tipuesearch = {"pages": [{'title': '虎科vpn設定', 'text': '依作業系統版本下載使用者端程式 \n \n 程式下載完成後，點擊兩下開始安裝 \n \n "點選搜尋" > 輸入程式名稱為Network Connect> 點擊Network Connect \n \n 執行程式後，於"登入頁面"輸入網址 :\xa0 https://sslvpn9.twaren.net/nfu \xa0 ，後按下"執行" \n \n 輸入使用者帳號密碼 \n \n 螢幕右下角顯示"已連接"，表示已成功連線 \n \n 在IE瀏覽器上按下右鍵 使用"以系統管理員身分執行" \n 登入頁面：\xa0 https://sslvpn9.twaren.net/nfu ，按下「執行」，會出現帳號與密碼登入欄位 \n \n \n', 'tags': '', 'url': '虎科vpn設定.html'}, {'title': '期末報告', 'text': '', 'tags': '', 'url': '期末報告.html'}, {'title': 'Ubuntu', 'text': '下載ubuntu \n \n \n \n \n \n \n', 'tags': '', 'url': 'Ubuntu.html'}, {'title': '近端配置與管理', 'text': 'windows network setting \n chrome proxy \n \n firefox proxy \n mde.tw \n github.com \n \n \n portable programming system \n protablegit - remove helper=manager \n login github add repository - README.md \n git clone self-repo and CMSimfly \n y:\\home\\.gitconfig \n git config --global user.name"50733136" \n git config --global user.eamil"50733136@gm.nfu.edu.tw" \n git config --global http.proxy  http://140.130.17.3:3128 \n git add . \n git push \n Github Pages -setting url \n local python \n \n \n', 'tags': '', 'url': '近端配置與管理.html'}, {'title': '期中報告', 'text': '\n \n https://www.youtube.com/watch?v=S09FjTkL244&t=8s \n', 'tags': '', 'url': '期中報告.html'}, {'title': 'game', 'text': '\n \n', 'tags': '', 'url': 'game.html'}, {'title': 'game1', 'text': ' Your browser doesn\'t support the HTML5 element canvas.      Throw dice  \n \n Stage:   Point:   Outcome:  \n \n <script type="text/javascript">// <![CDATA[\nvar cwidth = 400;\n    var cheight = 300;\n    var dicex = 50;\n    var dicey = 50;\n    var dicewidth = 100;\n    var diceheight = 100;\n    var dotrad = 6;\n    var ctx;\n    var dx;\n    var dy;\n    var firstturn = true;\n    var point;\nfunction throwdice() {\n    var sum;\n    var ch = 1+Math.floor(Math.random()*6);\n    sum = ch;\n    dx = dicex;\n    dy = dicey;\n    drawface(ch);\n    dx = dicex + 150;\n    ch=1 + Math.floor(Math.random()*6);\n    sum += ch;\n    drawface(ch);\n    if (firstturn) {\n        switch(sum) {\n            case 7:\n            case 11:\n              document.f.outcome.value="You win!";\n              break;\n            case 2:\n            case 3:\n            case 12:\n              document.f.outcome.value="You lose!";\n              break;\n            default:\n              point = sum;\n              document.f.pv.value=point;\n              firstturn = false;\n              document.f.stage.value="Need follow-up throw.";\n              document.f.outcome.value="   ";\n        }\n    }\n    else {\n        switch(sum) {\n        case point:\n           document.f.outcome.value="You win!";\n           document.f.stage.value="Back to first throw.";\n           document.f.pv.value=" ";\n           firstturn = true;\n           break;\n        case 7:\n           document.f.outcome.value="You lose!";\n           document.f.stage.value="Back to first throw.";\n           document.f.pv.value=" ";\n           firstturn = true;\n        }\n            }\n}\nfunction drawface(n) {\n  ctx = document.getElementById(\'canvas\').getContext(\'2d\');  \n  ctx.lineWidth = 5;\n  ctx.clearRect(dx,dy,dicewidth,diceheight);\n  ctx.strokeRect(dx,dy,dicewidth,diceheight)\n  var dotx;\n  var doty;\n  ctx.fillStyle = "#009966";\n    switch(n) {\n        case 1:\n         draw1();\n         break;\n        case 2:\n         draw2();\n         break;\n        case 3:\n         draw2();\n         draw1();\n         break;\n        case 4:\n         draw4();\n         break;\n        case 5:\n         draw4();\n         draw1();\n         break;\n        case 6:\n         draw4();\n         draw2mid();\n         break;\n         \n    }\n}\nfunction draw1() {\n    var dotx;\n    var doty;\n    ctx.beginPath();\n    dotx = dx + .5*dicewidth;\n    doty = dy + .5*diceheight;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill();\n}\nfunction draw2() {\n    var dotx;\n    var doty;\n    ctx.beginPath();\n    dotx = dx + 3*dotrad;\n    doty = dy + 3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    dotx = dx+dicewidth-3*dotrad;\n    doty = dy+diceheight-3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill();\n}\nfunction draw4() {\n    var dotx;\n    var doty;\n    ctx.beginPath();\n    dotx = dx + 3*dotrad;\n    doty = dy + 3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    dotx = dx+dicewidth-3*dotrad;\n    doty = dy+diceheight-3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill();\n    ctx.beginPath();\n    dotx = dx + 3*dotrad;\n    doty = dy + diceheight-3*dotrad;  //no change\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    dotx = dx+dicewidth-3*dotrad;\n    doty = dy+ 3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill(); \n}\nfunction draw2mid() {\n    var dotx;\n    var doty;\n    ctx.beginPath();\n    dotx = dx + 3*dotrad;\n    doty = dy + .5*diceheight;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    dotx = dx+dicewidth-3*dotrad;\n    doty = dy + .5*diceheight; //no change\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill();\n}\n// ]]></script>\n<p><canvas height="300" id="canvas" width="400"> Your browser doesn\'t support the HTML5 element canvas. </canvas> <br> <button onclick="throwdice();">Throw dice </button></p>\n<form id="f" name="f">Stage: <input name="stage" type="text" value="First Throw"> Point: <input name="pv" type="text" value="   "> Outcome: <input name="outcome" type="text" value="     "></form> \n \n \n', 'tags': '', 'url': 'game1.html'}, {'title': 'game2', 'text': 'Try it \n \n <p><button onclick="myFunction()">Try it</button></p>\n<p id="demo"></p>\n<script>// <![CDATA[\nfunction myFunction() {\n  document.getElementById("demo").innerHTML = Math.floor(Math.random()*10);\n}\n// ]]></script> \n \n \n', 'tags': '', 'url': 'game2.html'}, {'title': 'ROC Flag', 'text': '\n  導入 Brython 標準程式庫  \n \n \n \n  啟動 Brython  \n \n \n \n \n', 'tags': '', 'url': 'ROC Flag.html'}]};