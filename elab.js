/***********************************

> 應用名稱：翼腊挥栟
> 軟件版本：2.8.5
> 更新時間：2022-02-17

 
[rewrite_local]

# 翼腊挥栟
https?:\/\/bookapi\.ellabook\.cn\/rest\/api\/service$ url script-response-body https://raw.githubusercontent.com/NoahL9/ziyong/refs/heads/main/elabook.js

[mitm] 

hostname=bookapi.ellabook.cn

***********************************/
body = $response.body.replace(/ip":"NO"/g, "ip\":\"YES\"")
                     .replace(/ip":"VIP_NO"/g, "ip\":\"VIP_YES\"")
                     .replace(/code":"\d{10}/g, "code\":\"0x00000000")
                     .replace(/status":"\d/g, "status\":\"1");
$done({body});
