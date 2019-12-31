// //模块定义以及模块标识
// module.exports={//将模块暴露出去（对象）
//     a:function(){//模块对象中的方法
//         console.log("aaaa");
//     },
//     b:function(){
//         console.log("bbb");
//     }
// }



var obj ={
    a:function(){
        console.log("aaa");
    }
};
obj = (function(obj1){
    obj1.a();
    return obj1;
})(obj);