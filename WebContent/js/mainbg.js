//그림넣는곳
var bgslides=new Array()      
bgslides[0]="/images/main/200513_1.jpg"
bgslides[1]="/images/main/200513_2.jpg"    
bgslides[2]="/images/main/200513_3.jpg"
bgslides[3]="/images/main/200324_4.jpg"      


         
    
var speed=11000  //바뀌는 속도

//preload images
var processed=new Array()
for (i=0;i<bgslides.length;i++){
    processed[i]=new Image()   
    processed[i].src=bgslides[i]
}

var inc=-1

function slideback(){
    if (inc<bgslides.length-1){
        inc++
    }else{
        inc=0 
    }
    document.body.background=processed[inc].src
}

if (document.all||document.getElementById) {
	window.onload=new Function('slideback();setInterval("slideback()",speed)')
	
}
