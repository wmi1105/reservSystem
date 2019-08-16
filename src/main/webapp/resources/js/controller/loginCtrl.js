
myApp.controller('loginCtrl',['$scope','$http','$compile',function ($scope,$http,$compile){
	
	$scope.login = function(){
		
		var id = $("#id").val();
		var pass = $("#password").val();
		
		if(id == '' || pass == ''){
			if(id == '') $("#id").addClass("is-invalid");
			else $("#password").addClass("is-invalid");
			
			return false;
		}
		
		
		var param = $("#loginForm").serialize();
		console.log(param);
		
		$.ajax({
			method: 'POST',
			url: '/reserv/login',
			data: param,
			beforeSend : function(xhr){
				xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8");
				xhr.setRequestHeader("Ajax", "true");
			},
			success:function(data){
				var result = data.result;
				var info = data.info;
				$("#loginForm input").removeClass("is-invalid");
				if(result == 'suc'){
					setCookie_loginInfo(info);
					location.href = '/main';
				}
				else{
					$('#'+data).addClass('is-invalid');
				}
//				
			},
			error:function(data, status, err){
				alert("error:"+ data.responseText);
			}
		})
	}
	
	
	function setCookie_loginInfo(info){
		console.log(info);
		$scope.tmp = info;
		var field = ['e_email', 'c_password', 'c_name', 'region', 'c_phone', 'interest'];
		
		for(var i = 0; i< field.length; i++){
			var name = field[i];
			var value = $scope.$eval('tmp.'+name) + '';
			
			setCookie(name, value.trim());
		}
		
		
		
	}
	
}]);
