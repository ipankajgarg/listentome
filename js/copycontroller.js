window.addEventListener("DOMContentLoaded",init);

function init(){

    var sidebar = document.getElementById("forhide");
    forhide.addEventListener("click",translate)
    var arr = document.getElementsByClassName("show");
    console.log(arr);
    for(var i =0;i<arr.length;i++){
        
        arr[i].addEventListener("click",update);
        
    }
     var bt = document.getElementsByClassName("btn");

    Array.prototype.forEach.apply(bt,[function(btn){
        btn.addEventListener("click",add);
    }])
    
   document.getElementById("save").addEventListener("click",save);
    load();
     
    document.getElementById("songb").addEventListener("click",playli);

}
//function showbox(){
//    var text = this.previousElementSibling;
//    console.log(text);
//     text.classList.toggle("showinput");
//}
function playli(){
    var t = this.textContent;
    console.log("hello");
}
     
function translate(){
    var a = this.nextElementSibling
    console.log(a);
    a.classList.toggle("sideshow")
}

function save(){
    var json = JSON.stringify(object.arr);
    localStorage.data = json;
    console.log( localStorage.data)
}

function load(){
    var data = JSON.parse(localStorage.data);
    object.arr = data;
  link(object.arr);
}

function update(){
       event.preventDefault();
    console.log("nxcas");
    var str = this.firstElementChild;
    console.log(str);
    
   str.classList.toggle("showme");
    
   
}


function add(){
     var  s = this.firstElementChild.innerHTML;
          console.log(s);
    var imgdata="imagegaana/"+s+".jpg"
         
         console.log(imgdata);
        object.create(s,imgdata);
                 var current = object.getLastObject();
    added(current);

    
}
function added(current){
   
    console.log(current);
    
    var ul = document.getElementById('songlist');
    
    var {s,imgdata} = current;
    console.log(s);
       var  li = document.createElement('li'); 
         var   img = document.createElement('img');
    var span1 = document.createElement('span');
    var a = document.createElement('a');
   
    a.innerHTML =  "<img src='imagegaana/cross1.png'>"
    
    img.src = imgdata;
    span1.innerHTML = s;
     ul.appendChild(li);
           li.appendChild(img);
        li.appendChild(span1);
    li.appendChild(a);
    console.log(li.childNodes[1]);
    
   
        span1.addEventListener("click",playlist);
    a.addEventListener("click",deletelist);
   
}
function deletelist(event){
var li  =  event.srcElement.parentNode.parentNode;
    console.log(li);
    li.classList.toggle('blur');
   
var delmark   = li.childNodes[1].textContent;
var hold= object.marked(delmark);
  
    link(hold);
    
   
    
}
function link(hold){
    document.getElementById("songlist").innerHTML = "";
  
   hold.forEach(added);
}



function playlist(){
    console.log("enter");
    var p =this.innerHTML;
    
    console.log(p);
    document.getElementById('myaudio').pause();
	document.getElementById('myaudio').currentTime = 0;
document.getElementById('album').src="imagegaana/"+p+".jpg";
	document.getElementById('myaudio').src="audio/"+p+".mp3";
  
	document.getElementById('myaudio').play(); 
}



    $(document).ready(function(){
	
$(".recent a , .trending a , .scale a").click(function(){
	var value = $(this).find(".song_name").text().trim();
   event.preventDefault();
    /*console.log(value);*/
   
	document.getElementById('myaudio').pause();
	document.getElementById('myaudio').currentTime = 0;
	document.getElementById('album').src="imagegaana/"+value+".jpg";
	document.getElementById('myaudio').src="audio/"+value+".mp3";
	document.getElementById('myaudio').play();
});
});

    


