<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="ko" ng-app="myApp" ng-clock>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Reservation</title>

<!-- 부트스트랩 / UI -->
<link rel="stylesheet" type="text/css" href="/resources/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css" />

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular.min.js"></script>
<script type="text/javascript" src="/resources/js/common.js"></script>
<script type="text/javascript" src="/resources/js/addrCode.js"></script>


<!-- angular controller  -->
<script>var myApp = angular.module('myApp', []);</script>
<script type="text/javascript" src="/resources/js/controller/angularController.js" charset="utf-8"></script>
<script type="text/javascript" src="/resources/js/controller/loginCtrl.js" charset="utf-8"></script>
<script type="text/javascript" src="/resources/js/controller/reservCtrl.js" charset="utf-8"></script>


<script type="text/javascript" src="https://rawgit.com/moment/moment/2.2.1/min/moment.min.js"></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="/resources/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>


</head>
<body ng-controller="rootCtrl">

