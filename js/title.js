// 浏览器标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '哼!跑到哪里去了（；´д｀）ゞ';
        clearTimeout(titleTime);
    }
    else {
        document.title = '主人欢迎回来！（＾∀＾●）ﾉｼ';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});