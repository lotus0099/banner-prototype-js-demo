var oBan = document.getElementById("banner");
var oBanImg = oBan.getElementsByTagName("img");
var oTagLis = document.getElementById("tab").getElementsByTagName("li");
var oBtn = document.getElementById("btn").getElementsByTagName("div");
var timer;
var index = 0;

oBanImg[0].style.display="block";
oTagLis[0].className = "on";
//点击原点切换图片

for (var i = 0; i < oTagLis.length; i++) {
    oTagLis[i].index = i;
    oTagLis[i].onclick = function(){
        oBanImg[index].style.display="none";
        oTagLis[index].className = "";
        index = this.index;
        oBanImg[index].style.display="block";
        oTagLis[index].className = "on";
    }
}
//点击箭头切换图片

for (var i = 0; i < oBtn.length; i++) {
    oBtn[i].index = i;
    oBtn[i].onclick = function(){
        oBanImg[index].style.display="none";
        oTagLis[index].className = "";
        if(this.index){
            index++;
            index %= oTagLis.length;
        }else{
            index--;
            if(index<0)index = oTagLis.length-1;
        }
        oBanImg[index].style.display="block";
        oTagLis[index].className = "on";
    }
}
auto();
oBan.onmouseenter = function(){
    clearInterval(timer);
}
oBan.onmouseleave = function(){
    auto();
}
function auto(){
    timer = setInterval(function(){
        oBanImg[index].style.display="none";
        oTagLis[index].className = "";
        index++;
        index %= oTagLis.length;
        console.log(index);

        oBanImg[index].style.display="block";
        oTagLis[index].className = "on";
    },3000);
}
