function otp(){
	
	$.ajax({
		async:true,
		url:'/site/otp/otp_launcher.jsp',
		dataType:'json',
		success: function(data){
			eval(data.action);
			if(window.location.href.indexOf('otp.html') != -1){
				history.back();
			}
		},
		error : function(request, status, error ){ 
			document.location.href="https://www.gachon.ac.kr/site/sso_login.jsp";
			
		}
	});
}
function otp_tomato(type){
	
	$.ajax({
		async:true,
		url:'/site/otp_tomato/otp_launcher.jsp?type='+type,
		dataType:'json',
		success: function(data){
			eval(data.action);
			if(window.location.href.indexOf('otp.html') != -1){
				history.back();
			}

		},
		error : function(request, status, error ){ 
			document.location.href="https://www.gachon.ac.kr/site/sso_login.jsp";
		}
	});
}
