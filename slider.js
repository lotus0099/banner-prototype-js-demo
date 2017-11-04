function byId(id){
  return typeof(id) === "string"?document.getElementById(id):id;
}


var index = 0,
    timer = null,
    pics = byId("banner").getElementsByTagName("div"),
    len = pics.length,
    dots = byId("dots").getElementsByTagName("span"),
    prev = byId("prev"),
    next = byId("next"),
    menu = byId("content"),
    menuItems = menu.getElementsByTagName("li"),
    subMenu = byId("sub-menu"),
    innerBox = byId("sub-menu").getElementsByClassName("inner-box");
function slideImg(){
    var main = byId("main");
    //鼠标滑过清除定时器
    main.onmouseover = function(){
        if(timer) clearInterval(timer);
    }
    //鼠标离开开启定时器
    main.onmouseout = function(){
      timer = setInterval(function(){
        index++;
        if(index>=len) index=0;
        changeImg();
      },3000);
    }
    //点击元按钮
    for (var n = 0; n < dots.length; n++) {
      dots[n].setAttribute("id",n);
      dots[n].onclick = function(){
          index=this.id;
          console.log(index);
          changeImg();
      }
    }
    main.onmouseout();

    prev.onclick=function(){
      index--;
      if(index<0) index=len-1;
      changeImg();
    }
    next.onclick=function(){
      index++;
      if(index>=len) index=0;
      changeImg();
    }
    //主菜单导航
    for(var m = 0;m<menuItems.length;m++){
      //给每一个menu-item定义data-index，作为索引；
       menuItems[m].setAttribute("data-index",m);

      menuItems[m].onmouseover=function(){

         var idx = this.getAttribute("data-index");
         //遍历所有子菜单，将每一个都隐藏；
         for(var n=0;n<innerBox.length;n++){
           innerBox[n].style.display='none';
         }
         subMenu.className = 'sub-menu';
         innerBox[idx].style.display = "block";
      }
     }
     menu.onmouseout=function(){
       subMenu.className = 'sub-menu hide';
     }
     subMenu.onmouseover= function(){
       subMenu.className = 'sub-menu';
     }
     subMenu.onmouseout = function(){
       this.className = "sub-menu hide";
     }
  }
function changeImg(){
  for (var i = 0; i < pics.length; i++) {
    pics[i].style.display = "none";
    dots[i].className="";
  }
    pics[index].style.display = "block";
    dots[index].className="dots-active";
}
slideImg();
