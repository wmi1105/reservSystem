
  // Controller magic
myApp.service('myService', function($http, $interval, $filter, $cookies, $rootScope, searchInit) {
	
	var myService = this;
	
	
	myService.requestAjax = function(url, param, type, success_function, error_function, then_function) {
		$.ajax({
			method: type,
			url: url,
			data: param,
			beforeSend : function(xhr){xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8");
						xhr.setRequestHeader("Ajax", "true");},
			success: onSuccess,
			error: onError
		});	
		function onSuccess(data){
			loadingImg('hide');
			success_function(data);
			$scope.$apply();
		}
		function onError(data){
			alert(data);
		}
	}
	
	myService.requestHttp = function($http, url, param, type, success_function, error_function, then_function) {
		$http({
			method : type,
			url : url,
			data : $.param(param),
			async : false,
			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
				'Ajax' : 'true'
			},
		})
		.success(function(data, status, headers, config) {
			loadingImg('hide');
			success_function(data);
		}).error(function(data, status, headers, config) {
			alert(data);
		});
	}
})
	
myApp.controller('rootCtrl',['$scope','$http','$compile',function ($scope,$http,$compile){
	
//	$scope.oper_id = getCookie("oper_id");			//회원ID
//	$scope.oper_scode = getCookie("oper_scode");	//창고코드
//	$scope.oper_name = getCookie("oper_name");		//창고이름
//	$scope.oper_sname = getCookie("oper_sname");	//창고이름 
//	$scope.today = new Date().format("yyyy-MM-dd");	//오늘날짜
	$scope.today = new Date();
	
//	var lastMonth = new Date(new Date().setMonth(new Date().getMonth()-1));
//	var dateFormat = $.datepicker.formatDate('yy-mm-dd', lastMonth);
//	$scope.lastMonth = dateFormat;		//한달 전 날짜
	
//	$(document).ready(function(){
//		var loading = $('<div id="loading" class="loading"></div><img id="loading_img" alt="loading" src="/images/brd/ajax_loader4.gif" />')
//						.appendTo(document.body).hide();
//		$(document).ajaxStart(function(){
////			loading.show();
//		})
//		.ajaxStop(function(){
////			loading.hide();
//		});
//	});
	
	$scope.requestAjax = function(url, param, type, succ){
		$.ajax({
			method: type,
			url: url,
			data: param,
			beforeSend : function(xhr){
				xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8");
				xhr.setRequestHeader("Ajax", "true");
			},
			success:function(data, status){
				succ(data, status);
			},
			error:function(data, status, err){
				alert("error:"+ data.responseText);
			}
		})
	}
	
	
	
	$scope.requestHttp = function($http, url, param, type, succ){
		
	}
	
	
	
	$scope.mongoEvent = function(){
		var name = $("#inname").val();
		var age = $("#inage").val();
		
		var param={name:name, age:age}
		var url = '/reserv/mongoinputajax';
		
		$.ajax({
			method: 'POST',
			url: url,
			data: param,
			beforeSend : function(xhr){
				xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8");
				xhr.setRequestHeader("Ajax", "true");
			},
			success:function(data){
				alert("suc ajax.../"+data.val);
			},
			error:function(data, status, err){
				alert("error:"+ data.responseText);
			}
		})
		
	}
	
	
	$scope.mongoList = function(){
		
		var param={};
		var url = '/reserv/mongolistajax';
		
		$.ajax({
			method: 'POST',
			url: url,
			data: param,
			beforeSend : function(xhr){
				xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8");
				xhr.setRequestHeader("Ajax", "true");
			},
			success:function(data){
//				alert("suc ajax...\n"+data.rows);
				$scope.list = data.rows;
				$scope.$apply();
			},
			error:function(data, status, err){
				alert("error:"+ data.responseText);
			}
		})
		
	}
	
	
	//input 포커스 이동
	$scope.focusCtrl = function(key, nowId, nextId){
		var keyCode = key.keyCode;
		if(keyCode != 13) return false;
		
		$("#"+nextId).focus();
	}
	
	
	
}]);



/**
 * 
 */
