//模块引用
var box =require("./a");//模块的引入

//这里使用的是模块化开发
(function(){//利用自执行函数执行引入对象的方法
    box.a();
    box.b();
})()

//另一种模块化开发