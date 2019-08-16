
myApp.controller('reservCtrl',['$scope','$http','$compile',function ($scope,$http,$compile){
	
	$scope.useId = '';
	$scope.overChk_msg = '';
	$scope.addr = [];
	
	$scope.readAddrCode = function(){
		$scope.addr.city = addrCode('city', 0);
		$scope.addr.district = addrCode('district',0);
	}
	
	//id중복체크 
	$scope.idOverChk = function(){
		
		var url = "/reserv/idOverChk";
		var inputId = $("#email").val();
		
		if(inputId == ''){
			alert("email을 입력해주세요");
			$("#email").focus();
			return false;
		}else{
			var email_chk = ckItemEmail(inputId);
			if(email_chk == false){
				$("#email").focus();
				return false;
			}
		}
		
		var param = {id:$("#email").val()}
		
		$scope.requestAjax(url , param, 'POST', function(data, status){
			var resultCount = data;
			console.log(resultCount);
			if(data == 0){	//중복없음
				$scope.useId = inputId;
				$scope.overChk_msg = 'Valid'; 
				
				$(".overChk_msg").css('color', 'green');
				
				$("#password").focus();
			} 
			else{	 //중복있음
				$scope.overChk_msg = 'Invalid';
				
				$(".overChk_msg").css('color', 'red');
				
				
				
				$("#email").focus();
			}
			$scope.$apply();
		})
		 
	}
	
	//전화번호 숫자만 입력
	$scope.telInputChk = function(event){
		console.log("key: "+event+", value: "+event.key);
		
		var input = $("#phone").val();
		var input_size = input.length;
		
		if(input_size > 11){
			var input = input.slice(0,-1);
			$("#phone").val(input);
		}
		
		var chkNum = ckItemNum(event.key);
		if(chkNum == 'str'){
			var input = input.slice(0,-1);
			$("#phone").val(input);
		}
	}
	
	//전화번호 (-) 제어
	$scope.chkPhoneType = function(type){
		var input = $("#phone").val();
		if(type == 'blur'){
			var input_size = input.length;
			if(input_size < 10 && input_size > 11)return false;

			var phone = chkItemPhone(input);
		}
		
		if(type == 'focus'){
			var phone = input.replace( /-/gi, '');
		}
		
		$("#phone").val(phone);
		
	}
	
	//등록
	$scope.saveAccount = function(){
		var param = $('#accountForm').serialize();
		var err_id = formChk();
		
		if(err_id !=''){
			$('#'+err_id).focus();
			return false;
		}
		
		var url = "/reserv/saveAccount";
		
		$scope.requestAjax(url, param, 'POST', function(data, status){
			var result = data.result;
			console.log(result);
			
			if(result == 0){
				alert("계정 등록에 실패하였습니다. 다시 시도해 주세요.");
				return false;
			}else{
				alert("등록되었습니다. 로그인해주세요.");
				location.href = '/login';
			}
		})
	}
	
	
	function formChk(){ 
		$("#accountForm input").removeClass('is-invalid');

		var err = "";
		var input_param = ['name', 'email', 'pass', 'passChk', 'phone'];
		for(var i =0; i<input_param.length; i++){

			var id = input_param[i];
			var value = $('#'+id).val();

			if(value == ''){err = id;}	//필수값 공백 체크
			else if(id == 'email' && value != $scope.useId){err = id;}	//아이디 중복 확인
			else if(id == 'passChk' && (value != $("#pass").val())){err = id;}		//비밀번호 확인 체크
			else if(id == 'phone' && (value.length < 12 || value.length > 13)){err = id;}		//전화번호 자릿수 체크
				

			if(err != ''){
				$('#'+id).addClass('is-invalid');
				break;
			}
			
			
		}
		
		if(err == ''){	//정보제공 체크
			var chk_param = ['agreementChk', 'personalChk']
			
			for(var i = 0 ; i<chk_param.length; i++){
				var name = chk_param[i];
				if($('input[name='+name+']:checked').val() != 'on'){
					$('#'+name).addClass('is-invalid');
					if(err == '') err = name;
				}
			}
		}
		
		return err;
	}
	
}]);
