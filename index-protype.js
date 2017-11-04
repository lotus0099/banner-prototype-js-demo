var oBan = document.getElementById("banner");
var oBanImg = oBan.getElementsByTagName("img");
var oTagLis = document.getElementById("tab").getElementsByTagName("li");
var oBtn = document.getElementById("btn").getElementsByTagName("div");

function Banner(ban,banImg,tagLi,btn){
    this.ban = ban;
    this.ImgLis = banImg;
    this.tag = tagLi;
    this.btn = btn;
    this.index =0;
    this.timer = null;
    this.length = tagLi.length;
};
Banner.prototype.init = function(){
    var This = this;
    this.ImgLis[0].style.display="block";
    this.tag[0].className = "on";
    for (var i = 0; i < this.length; i++) {
        this.tag[i].index = i;
        this.tag[i].onclick = function(){
            This.ImgLis[This.index].style.display="none";
            This.tag[This.index].className = "";
            This.index = this.index;
            This.ImgLis[This.index].style.display="block";
            This.tag[This.index].className = "on";
        }
    }
    for (var i = 0; i < this.btn.length; i++) {
        this.btn[i].index = i;
        this.btn[i].onclick = function(){
            This.ImgLis[This.index].style.display="none";
            This.tag[This.index].className = "";
            if(this.index){
                This.index++;
                This.index %= oTagLis.length;
            }else{
                This.index--;
                if(This.index<0)This.index = This.length-1;
            }
            This.ImgLis[This.index].style.display="block";
            This.tag[This.index].className = "on";
        }
    }
    this.auto();
    this.clear();
}

Banner.prototype.clear=function(){
    var This = this;
    this.ban.onmouseenter = function(){
        clearInterval(This.timer);
    }
    this.ban.onmouseleave = function(){
        This.auto();
    }
}

Banner.prototype.auto=function(){
    var This = this;
    this.timer = setInterval(function(){
        This.ImgLis[This.index].style.display="none";
        This.tag[This.index].className = "";
        This.index++;
        This.index %= oTagLis.length;
        This.ImgLis[This.index].style.display="block";
        This.tag[This.index].className = "on";
    },3000);
}

var banner1 = new Banner(oBan,oBanImg,oTagLis,oBtn);
banner1.init();
