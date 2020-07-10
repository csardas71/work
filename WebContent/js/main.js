//***** 로테이션 관련 ****//
var Loop1 = true; // 팝업존
var Loop2 = false; // 요리강습
var Loop3 = false; // 우측상단팝업
var Duration = 5000;
var timmer;

// 루프 비활성화 하기
function pause(selector) {

	switch (selector)
	{
		case 1 :
			Loop1 = false;
			break;
		case 2 :
			Loop2 = false;
			break;
		case 3 :
			Loop3 = false;
			break;
	}
}

//  루프 활성화 하기
function play(selector)
{
	switch (selector)
	{
		case 1 :
			Loop1 = true;
			break;
		case 2 :
			Loop2 = true;
			break;
		case 3 :
			Loop3 = true;
			break;
	}
}

// 루프 최초 시작
function Start()
{
	timmer = setTimeout("DoStart()", Duration);
}

// LooP 함수 
function DoStart(){
	if(Loop1)
		mainPopCon('N');
	//if(Loop2)
		//fodCon('N');
	//if(Loop3)
		//etcCon('N');
	
	timmer = setTimeout("DoStart()", Duration);
}

/////////////////////////////////////////////////////////////////////////






/*
	add window.onload : addLoadEvent( func );
*/
function addLoadEvent(func) {
	var oldOnload = window.onload;

	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function () {
			oldOnload();
			func();
		}
	}
}

/*
	ie6 png change
	- css  : .png24{ tmp:expression( setPng24(this) ); }
	- html : <element class="png24" />
*/
function setPng24(obj) {
	obj.width        = obj.height = 1;
	obj.className    = obj.className.replace(/\bpng24\b/i,'');
	obj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');"
	obj.src          = '';

	return '';
}

/*
	ie6 background image cache : bgImgCache();
*/
function bgImgCache() {
	try {
		document.execCommand("BackgroundImageCache", false, true);
	} catch( e ) {}
}

/*
	insertAfter : insertAfter( newElement, targetElement );
*/
function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;

	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}

/*
	open popup : openPopup('url', { width:400, height:500, scroll:0, top:100, left:100, name:'name_popup' });
*/
function openPopup(url, option) {
	var obj_option = option == null ? {} : option;

	if (url               == null) url               = "";
	if (obj_option.width  == null) obj_option.width  = window.screen.availWidth;
	if (obj_option.height == null) obj_option.height = window.screen.availHeight;
	if (obj_option.scroll == null) obj_option.scroll = 0;
	if (obj_option.top    == null) obj_option.top    = (window.screen.availHeight - obj_option.height) / 4;
	if (obj_option.left   == null) obj_option.left   = (window.screen.availWidth  - obj_option.width) / 4;
	if (obj_option.name   == null) obj_option.name   = "";
	if (obj_option.errMsg == null) obj_option.errMsg = "Please disable popup blocking!";

	var newWindow = window.open(url, obj_option.name, "width=" + obj_option.width + ",height=" + obj_option.height + ",scrollbars=" + obj_option.scroll + ",toolbar=0,menubars=0,locationbar=0,historybar=0,statusbar=0,resizable=0,left=" + obj_option.left + ",top=" + obj_option.top + ",channelmode=no,titlebar=no", false);

	if (!newWindow) {
		alert(obj_option.errMsg);
		return false;
	}
	newWindow.focus();

	return newWindow;
}
// imgover
	function imgOver() {
	  var aImages = document.getElementsByTagName('img');
	  for(var i=0; i<aImages.length; i++) {
		if (aImages[i].className == 'imgover') {
		  aImages[i].onmouseover = function() {
			var img_src =  this.getAttribute('src');
			img_src = img_src.replace("_off", "_on");
			this.setAttribute('src', img_src);
			}
		   aImages[i].onmouseout = function() {
			  var img_src =  this.getAttribute('src');
			  img_src = img_src.replace("_on", "_off");
			  this.setAttribute('src', img_src);
		   }
		}
	}
	return false;
	}
addLoadEvent(imgOver);
{
}



// 레이버팝업
function MM_showHideLayers() { //v9.0
	var i,p,v,obj, obj_style, args=MM_showHideLayers.arguments;
	for (i=0; i<(args.length-2); i+=3) 

	with (document){
		if (getElementById && ((obj=getElementById(args[i]))!=null)) { 
			v = args[i+2];
			if (obj.style) { 
				obj_style = obj.style; 
				v = (v=='show')?'visible':(v=='hide')?'hidden':v; 
			}
			obj_style.visibility=v; 
			obj.style.display = "";
		}
	}
}




////////////////////////////////////////////////////////////////////////////////

// imgOverContent/ //news
function imgOvernews(num) {
	for (var i = 1; i <= 5; i++ ) {
		if(document.getElementById("news"+i+"_tab")){
			var content_tab = document.getElementById("news"+i+"_tab");
			var img_src =  content_tab.getAttribute('src');
			img_src = img_src.replace("_on", "_off");
			content_tab.setAttribute('src', img_src);
		}
	}

	var content_tab = document.getElementById("news"+num+"_tab");
	var img_src =  content_tab.getAttribute('src');
	img_src = img_src.replace("_off", "_on");
	content_tab.setAttribute('src', img_src);
}

//news
function viewContents(i)
{
	if(document.getElementById('contents1') != null) document.getElementById('contents1').style.visibility = "hidden";
	if(document.getElementById('contents2') != null) document.getElementById('contents2').style.visibility = "hidden";
	if(document.getElementById('contents3') != null) document.getElementById('contents3').style.visibility = "hidden";
	if(document.getElementById('contents4') != null) document.getElementById('contents4').style.visibility = "hidden";
	if(document.getElementById('contents5') != null) document.getElementById('contents5').style.visibility = "hidden";
	document.getElementById('contents'+i).style.visibility = "visible";

}

// imgOverContent/ //qiuck
function imgOverqiuck(num) {
	for (var i = 1; i <= 3; i++ ) {
		var content_tab = document.getElementById("qiuck"+i+"_tab");
		var img_src =  content_tab.getAttribute('src');
		img_src = img_src.replace("_on", "_off");
		content_tab.setAttribute('src', img_src);
	}

	var content_tab = document.getElementById("qiuck"+num+"_tab");
	var img_src =  content_tab.getAttribute('src');
	img_src = img_src.replace("_off", "_on");
	content_tab.setAttribute('src', img_src);
}

//qiuck
function viewqiuck(i)
{
	document.getElementById('qiuck1').style.visibility = "hidden";
	document.getElementById('qiuck2').style.visibility = "hidden";
	document.getElementById('qiuck3').style.visibility = "hidden";
	document.getElementById('qiuck'+i).style.visibility = "visible";

}


///////////메인bg

// 배경이미지를 변경하는 부분입니다.
function chaImHa51(img) {
        if (document.all || document.getElementById) {
                document.body.background=img;
                if (navigator.userAgent.indexOf("Mac")!=-1 && navigator.appVersion.indexOf("MSIE 5")!=-1) {
                        window.resizeBy(0,-1);
                        window.resizeBy(0,1);
                }
        }
}


//가천인,일반인 수험생
function viewetc(i,ii)
{
    if(ii != 2){
        document.getElementById('etc1').style.visibility = "hidden";
        document.getElementById('etc2').style.visibility = "hidden";
        document.getElementById('etc3').style.visibility = "hidden";
        if(ii==0){
            document.getElementById('etc'+i).style.visibility = "visible";
        }
    }

}


//quick_service
function viewservice(i,ii)
{
    if(ii != 2){
        document.getElementById('service1').style.visibility = "hidden";
        if(ii==0){
            document.getElementById('service'+i).style.visibility = "visible";
        }
    }
//	if(document.getElementById('service'+i).style.visibility == "hidden"){
//		document.getElementById('service'+i).style.visibility = "visible";
//	}else{
//		document.getElementById('service'+i).style.visibility = "hidden";
//	}
}

 //found
function imgOverfound(num) {
	for (var i = 1; i <= 5; i++ ) {
		var content_tab = document.getElementById("found"+i+"_tab");
		var img_src =  content_tab.getAttribute('src');
		img_src = img_src.replace("_on", "_off");
		content_tab.setAttribute('src', img_src);
	}

	var content_tab = document.getElementById("found"+num+"_tab");
	var img_src =  content_tab.getAttribute('src');
	img_src = img_src.replace("_off", "_on");
	content_tab.setAttribute('src', img_src);
}

function setCookie( cookieName, cookieValue, expireDate )
{
	var today = new Date();
	today.setDate( today.getDate() + parseInt( expireDate ) );
	document.cookie = cookieName + "=" + escape( cookieValue ) + "; path=/; expires=" + today.toGMTString() + ";";
}

 //service
function imgOverservice(num) {
	for (var i = 1; i <= 4; i++ ) {
		var content_tab = document.getElementById("service"+i+"_tab");
		if(content_tab != null) {
			var img_src =  content_tab.getAttribute('src');
			img_src = img_src.replace("_on", "_off");
			content_tab.setAttribute('src', img_src);
		}
	}

	var content_tab = document.getElementById("service"+num+"_tab");
	if(content_tab != null) {
		var img_src =  content_tab.getAttribute('src');
		img_src = img_src.replace("_off", "_on");
		content_tab.setAttribute('src', img_src);
	}
}













