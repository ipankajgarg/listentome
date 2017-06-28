
var object = {
   
    arr : [],
    create : function(s , imgdata){
  
        var obj = new Songs(s,imgdata);
        this.arr.push(obj);
        console.log(object.arr)
    },
            getLastObject : function(){
                return this.arr[this.arr.length-1];
            
        
    },
    marked : function(delmark){
      
    var returnarr   = this.arr.filter(function(check){
  return check.s ==delmark
         
        })
    
    returnarr[0].markdeletion = !returnarr[0].markdeletion;
        console.log(object.arr);
        this.arr = this.arr.filter(function(fal){
            return fal.markdeletion == false;
        })
        return this.arr;
   

    }
    
       
    }
    

function Songs(s,imgdata){
    
    this.s = s;
    this.imgdata = imgdata;
    this.markdeletion = false;
}