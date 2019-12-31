export default class Menu{
    constructor() {
        this.elem = this.createElem();
    }
    createElem(){
        if(this.elem) return this.elem;
        var div=document.createElement("div");
        Object.assign(div.style,{

        });
        this.createBn(div);
        return div;
    }
    createBn(parent){
        var bn =document.createElement("button");
        Object.assign(bn.style,{
            //按钮有两px的默认边款
            //还有默认的背景颜色
            border: "1px solid #000000",
            backgroundColor:"#ffffff"
        })
        
        parent.appendTo(bn);
    }
    appendTo(parent){
        parent.appendChild(this.elem);
    }
}