# music接口文档

**1、用户

1.1 )user
调用地址：http://localhost:3001/api/user
请求方式：GET

请求参数：

参数名称	参数类型	参数说明	是否必填	默认值	示例值
username	string		是		
_id	string		是		
返回实例：
{
    "err": 0,
    "msg": "自动登陆成功",
    "data": {
        "_id": "5e6779a4e7feec2e080bcbdc",
        "nikename": "小乖乖",
        "fans": 6528,
        "follow": 36,
        "time": 1583839651126,
        "icon": "/upload/default.jpg"
    }
}

1.2 )reg
调用地址：http://localhost:3001/api/reg
请求方式：POST

请求参数：

参数名称	参数类型	参数说明	是否必填	默认值	示例值
username	string		是		
password	string		是		
nikename	string		否		
返回参数：
{
    "err": 0,
    "msg": "注册成功",
    "data": {
        "nikename": "小乖乖",
        "fans": 6584,
        "follow": 27,
        "time": 1585489659233,
        "icon": "/upload/default.jpg",
        "_id": "5e80a6fb0b2c583b0c0d4cb0"
 }
   }

1.3 )login
调用地址：http://localhost:3001/api/login
请求方式：POST

请求参数：

参数名称	参数类型	参数说明	是否必填	默认值	示例值
username	string		是		
password	string		是		
err	string		否	1	
msg	string		否		用户名密码为必传参数
返回参数：
{
    "err": 0,
    "msg": "登录成功",
    "data": {
        "_id": "5e6779a4e7feec2e080bcbdc",
        "nikename": "小乖乖",
        "fans": 6528,
        "follow": 36,
        "time": 1583839651126,
        "icon": "/upload/default.jpg"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlhbmciLCJfaWQiOiI1ZTY3NzlhNGU3ZmVlYzJlMDgwYmNiZGMiLCJpYXQiOjE1ODU0ODc5NDgsImV4cCI6MTU4NTU3NDM0OH0.AJVXkFO_o4I9dri6LOsWkJxex8OSECFIIwdwzRhqspU"
}



1.4 )logout
调用地址：http://localhost:3001/api/logout
请求方式：GET

请求参数：

参数名称	参数类型	参数说明	是否必填	默认值	示例值
err	string		否	0	
msg	string		否		注销成功
返回实例：
{
    "err": 0,
    "msg": "注销成功"
}
**2、数据


2.1 )banner
调用地址：http://localhost:3001/api/goods/banner
请求方式：GET
描述：
轮播图
请求参数：

参数名称	参数类型	参数说明	是否必填	默认值	示例值
_page	Number		是		
_limit	Number		是		
返回参数：

 {
            "_id": "5da99a716947891e780cea79",
            "title": "网易云音乐",
            "sub_title": null,
            "banner": "/upload/banner/img_01.jpg",
            "time": 1571396209777,
            "detail": {
                "icon": "/upload/noimage.png",
                "auth": null,
                "content": null
            }
        },


2.2 )cart
调用地址：http://localhost:3001/api/goods/cart
请求方式：GET
返回示例：
{
    "err": 0,
    "data": [
        {
            "_id": "5e6c52d82eb10927b88b70d0",
            "img": "/upload/product/shop3.jpg",
            "des": "i9S蓝牙5.0真无线耳机 ",
            "price": 89,
            "p": 189,
            "detail": {
                "auth": "晶晶",
                "content": "<p><span style='color:red'>隔壁老樊：</span></p><p>这一生关于你的风景</p><p>多想在平庸的生活拥抱你</p>",
                "auth_icon": "/upload/noimage.png"
            }
        },
        
}

2.3 )column
调用地址：http://localhost:3001/api/goods/column
请求方式：GET
返回示例：
{
    "err": 0,
    "data": [
        {
            "_id": "5e73299b0e3a7c1dcc5b8814",
            "title": "钻石星辰.",
            "time": "05:56",
            "auth": "栗先达",
            "detail": {
                "auth": "栗先达",
                "content": "<p>作曲 : 栗先达</p><p>作词 : 栗先达</p><p>编曲 : 关然</p><br><p>气温落下来以后 缄默如冰冻</p><p>零度里扑来的梦 晶莹孱弱私有</p><p>渴求作罢过山丘 卑微中颤抖</p><p>燃烧余温的念头 散星辰落入眸</p><p>昂贵你眼底洒下的云雨</p><p>原谅撑伞人不能再收集</p><p>翻开爱开始的故事</p><p>没有人有理智...</p>",
                "auth_icon": "/upload/noimage.png"
            }
        },

描述：
音乐列表


2.4)follow
调用地址：http://localhost:3001/api/goods/follow
请求方式：GET
返回示例：
{
    "err": 0,
    "data": [
        {
            "_id": "5e72448ab9d3d22abcd9c031",
            "one": {
                "auth": "张钰琪",
                "des": "Outside。"
            },
            "two": {
                "auth": "毛不易",
                "des": "呓语。"
            },
            "three": {
                "auth": "陈阳",
                "des": "放生。"
            },
            "four": {
                "auth": "芝麻",
                "des": "无花无果。"
            },
            "five": {
                "auth": "Lizzy",
                "des": "Losing My Head。"
            }
        },
}


2.5 )friend
调用地址：http://localhost:3001/api/goods/friend
请求方式：GET

{
    "err": 0,
    "data": [
        {
            "_id": "5e6c52752eb10927b88b70cc",
            "title": "春天暖意一定会带来很多好消息的吧",
            "des": "月亮踏过她的枕边 偷走时间 不发一言...",
            "img": "/upload/friend/tu1.jpg",
            "detail": {
                "auth": "鲑鱼先森^",
                "content": "<p> 春天的来临，也希望伴随着越来越多的好消息。大家一起奔向美好吧，不好听的话就不听了，不愉快的事情也会慢慢过去，好消息会发生，我知道在赶往最好的路上，你真的有在努力，也别忘了跟自己说辛苦啦～</p>",
                "auth_icon": "/upload/noimage.png"
            }
        },
