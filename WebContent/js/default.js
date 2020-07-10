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



// layer

function MM_calendar() { //v9.0

  var i,p,v,obj,args=MM_calendar.arguments;

  for (i=0; i<(args.length-2); i+=3) 

  with (document) if (getElementById && ((obj=getElementById(args[i]))!=null)) { v=args[i+2];

    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }

    obj.visibility=v; }

}



/*start*/

// imgOverContent/ news

function imgOverSummarys(num) {

	for (var i = 1; i <= 3; i++ ) {

		var content_tab = document.getElementById("contents"+i+"_tab");

		var img_src =  content_tab.getAttribute('src');

		img_src = img_src.replace("_on", "_off");

		content_tab.setAttribute('src', img_src);

	}



	var content_tab = document.getElementById("contents"+num+"_tab");

	var img_src =  content_tab.getAttribute('src');

	img_src = img_src.replace("_off", "_on");

	content_tab.setAttribute('src', img_src);

}



// imgOverContent 

function imgOverSummary(num) {

	for (var i = 1; i <= 8; i++ ) {

		var content_tab = document.getElementById("content"+i+"_tab");

		var img_src =  content_tab.getAttribute('src');

		img_src = img_src.replace("_on", "_off");

		content_tab.setAttribute('src', img_src);

	}



	var content_tab = document.getElementById("content"+num+"_tab");

	var img_src =  content_tab.getAttribute('src');

	img_src = img_src.replace("_off", "_on");

	content_tab.setAttribute('src', img_src);

}



// imgOverContent sms

function imgOversms(num) {

	for (var i = 1; i <= 8; i++ ) {

		var content_tab = document.getElementById("scontent"+i+"_tab");

		var img_src =  content_tab.getAttribute('src');

		img_src = img_src.replace("_on", "_off");

		content_tab.setAttribute('src', img_src);

	}



	var content_tab = document.getElementById("scontent"+num+"_tab");

	var img_src =  content_tab.getAttribute('src');

	img_src = img_src.replace("_off", "_on");

	content_tab.setAttribute('src', img_src);

}



//topday 

function viewContent(x)

{

	document.getElementById("content1").style.visibility = "hidden";

	document.getElementById("content2").style.visibility = "hidden";

	document.getElementById("content3").style.visibility = "hidden";

	document.getElementById("content4").style.visibility = "hidden";

	document.getElementById("content5").style.visibility = "hidden";

	document.getElementById("content6").style.visibility = "hidden";

	document.getElementById("content7").style.visibility = "hidden";

	document.getElementById("content8").style.visibility = "hidden";

	document.getElementById("content"+x).style.visibility = "visible";

}



//news

function viewContents(i)

{

	document.getElementById('contents1').style.visibility = "hidden";

	document.getElementById('contents2').style.visibility = "hidden";

	document.getElementById('contents3').style.visibility = "hidden";

	document.getElementById('contents'+i).style.visibility = "visible";



}

//sms 

function sms(x)

{

	document.getElementById("scontent1").style.visibility = "hidden";

	document.getElementById("scontent2").style.visibility = "hidden";

	document.getElementById("scontent3").style.visibility = "hidden";

	document.getElementById("scontent4").style.visibility = "hidden";

	document.getElementById("scontent5").style.visibility = "hidden";

	document.getElementById("scontent6").style.visibility = "hidden";

	document.getElementById("scontent7").style.visibility = "hidden";

	document.getElementById("scontent8").style.visibility = "hidden";

	document.getElementById("scontent"+x).style.visibility = "visible";

}





//LEFT 3TAB 

function attachup1(){

	var Obj = NowConent();

	var UL= Obj.getElementsByTagName('ul');

	var LIs = UL[0].getElementsByTagName('li');

	var li_1 = LIs[0].cloneNode(true);

	LIs[0].parentNode.appendChild(li_1);

	LIs[0].parentNode.removeChild(LIs[0]);   

} 



function attachdown1(){



	var Obj = NowConent();

	var UL = Obj.getElementsByTagName('ul');

	var LIs = UL[0].getElementsByTagName('li');   

	var li_1 = LIs[LIs.length-1].cloneNode(true);

	LIs[0].parentNode.insertBefore(li_1,LIs[0]);

	LIs[0].parentNode.removeChild(LIs[LIs.length-1]);



}



/*move*/

// next



var curpop = 1;

var poplen = "3";

poplen = Number(poplen) + 1;



function nextCon(vl)

{

	for(i=0; i < poplen ; i++)

	{

		var pop = document.getElementById("next"+(i+1));

		pop.style.visibility = "hidden";

	}



	if(vl == 'N')

	{

		if(curpop == poplen)

			curpop = 1;

		else

			curpop++;

	}

	else if(vl == 'P')

	{

		if(curpop == 1)

			curpop = 4;

		else

			curpop--;

	}

	else

	{

		curpop = vl;

	}

	pop = document.getElementById("next"+curpop);

	pop.style.visibility = "visible";

//	PopIconSelector(curpop);

}



// popup



var curpop = 1;

var poplen = "3";

poplen = Number(poplen) + 1;



function PopCon(vl)

{

	for(i=0; i < poplen ; i++)

	{

		var pop = document.getElementById("pop"+(i+1));

		pop.style.visibility = "hidden";

	}



	if(vl == 'N')

	{

		if(curpop == poplen)

			curpop = 1;

		else

			curpop++;

	}

	else if(vl == 'P')

	{

		if(curpop == 1)

			curpop = 4;

		else

			curpop--;

	}

	else

	{

		curpop = vl;

	}

	pop = document.getElementById("pop"+curpop);

	pop.style.visibility = "visible";

//	PopIconSelector(curpop);

}







/*gnb*/

// IMAGE SWAP total

function SwapImg(obj, imgnm)

{

	var path = "./images/main/";

	var imgobj = eval("document." + obj);

	imgobj.src = path + imgnm;

}

//  DIV Display total

function openDiv(id)

{

	var obj = document.getElementById(id);

	obj.style.visibility = "visible";

}

function closeDiv(id)

{

	var obj = document.getElementById(id);

	obj.style.visibility = "hidden";

}

// sub

function displaySub(id)

{

	var len = 9;

	

	for (i=0; i < len; i++)

	{

		var obj = document.getElementById("subnav_list"+(i+1));

		obj.style.visibility = "hidden";	

	}



	var obj = document.getElementById("subnav_list"+id);

	obj.style.visibility = "visible";

}



function CloseSub(id)

{

	var obj = document.getElementById("subnav_list"+id);

	obj.style.visibility = "hidden";

}

// imgOverContent gnb

function imgOvergnb(num) {

	for (var i = 1; i <= 9; i++ ) {

		var content_tab = document.getElementById("gnb"+i+"_tab");

		var img_src =  content_tab.getAttribute('src');

		img_src = img_src.replace("_on", "_off");

		content_tab.setAttribute('src', img_src);

	}



	var content_tab = document.getElementById("gnb"+num+"_tab");

	var img_src =  content_tab.getAttribute('src');

	img_src = img_src.replace("_off", "_on");

	content_tab.setAttribute('src', img_src);

}





//���� �ݱ�



function opendata(n){

	if(!n){

		return;

	}else{

		var i=1;

		for(i=1;i<=10;i++){

			var frm = document.getElementById("g"+i);

			if(i == n){

				if(frm.style.display == "none"){

					frm.style.display = "";

				}else{

					frm.style.display = "none";

				}

			}else{

				frm.style.display = "none";

			}

		}

	}

}


//�б�����
// imgOverContent his

function imgOverhis(num) {
	for (var i = 1; i <= 4; i++ ) {
		var content_tab = document.getElementById("his"+i+"_tab");
		var img_src =  content_tab.getAttribute('src');
		img_src = img_src.replace("_on", "_off");
		content_tab.setAttribute('src', img_src);
	}

	var content_tab = document.getElementById("his"+num+"_tab");
	var img_src =  content_tab.getAttribute('src');
	img_src = img_src.replace("_off", "_on");
	content_tab.setAttribute('src', img_src);

}



//his

function viewhis(x)

{

	document.getElementById("his1").style.display = "none";
	document.getElementById("his2").style.display = "none";
	document.getElementById("his3").style.display = "none";
	document.getElementById("his4").style.display = "none";
	document.getElementById("his"+x).style.display = "";

}

//������ȭ��ȣ
// imgOverContent tel

function imgOvertel(num) {
	for (var i = 1; i <= 7; i++ ) {
		var content_tab = document.getElementById("tel"+i+"_tab");
		var img_src =  content_tab.getAttribute('src');
		img_src = img_src.replace("_on", "_off");
		content_tab.setAttribute('src', img_src);
	}

	var content_tab = document.getElementById("tel"+num+"_tab");
	var img_src =  content_tab.getAttribute('src');
	img_src = img_src.replace("_off", "_on");
	content_tab.setAttribute('src', img_src);

}

//tel

function viewtel(x)

{

	document.getElementById("tel1").style.display = "none";
	document.getElementById("tel2").style.display = "none";
	document.getElementById("tel3").style.display = "none";
	document.getElementById("tel4").style.display = "none";
	document.getElementById("tel5").style.display = "none";
	document.getElementById("tel6").style.display = "none";
	document.getElementById("tel7").style.display = "none";
	document.getElementById("tel"+x).style.display = "";

}



function imgOvernews(num) { /*mouseover tab-img control*/
	for (var i = 1; i <= 4; i++ ) {
		var content_tab = document.getElementById("uni"+i+"_tab");/*tab_img id*/
		if( content_tab != null ){
			var img_src =  content_tab.getAttribute('src');
			img_src = img_src.replace("_on", "_off");
			content_tab.setAttribute('src', img_src);
		}
	}

	var content_tab = document.getElementById("uni"+num+"_tab");
	var img_src =  content_tab.getAttribute('src');
	img_src = img_src.replace("_off", "_on");
	content_tab.setAttribute('src', img_src);
}

//news contents control
function viewContents(i)
{
	if(document.getElementById('contents1') != null) document.getElementById('contents1').style.visibility = "hidden";
	if(document.getElementById('contents2') != null) document.getElementById('contents2').style.visibility = "hidden";
	if(document.getElementById('contents3') != null) document.getElementById('contents3').style.visibility = "hidden";
	if(document.getElementById('contents4') != null) document.getElementById('contents4').style.visibility = "hidden";
	document.getElementById('contents'+i).style.visibility = "visible";

}



//�������ϱ�
var initBody;
var boxes;
var box;
function beforePrint() {
	boxes = document.body.innerHTML;
	document.body.innerHTML = box.innerHTML;
}
function afterPrint() { 
 document.body.innerHTML = boxes;
}
function printArea() {
 window.print();
}

//GOOGLE ANALYTICS 2017-04-04 ujpark@gachon.ac.kr
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-96769474-1', 'auto');
ga('send', 'pageview');

