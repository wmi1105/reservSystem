<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="inc/header.jsp"%>
<link rel="stylesheet" type="text/css" href="/resources/css/login.css">

<section ng-controller="loginCtrl" style="width:100%">
	<form class="form-signin" id="loginForm">
		<!-- <img class="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"> -->
		<h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
		<label for="inputEmail" class="sr-only">Email address</label>
		<input type="email" name="id" id="id" class="form-control" placeholder="Email address" ng-keypress="focusCtrl($event, 'id', 'password')" required autofocus>
		<label for="inputPassword" class="sr-only">Password</label>
		<input type="password" name="password" id="password" class="form-control" placeholder="Password" ng-keypress="($event.keyCode == 13)?login():''" required>
		<div class="checkbox mb-3">
			<!-- <label>
	      <input type="checkbox" value="remember-me"> Remember me
	    </label> -->
		</div>
		<button class="btn btn-lg btn-primary btn-block" type="button" ng-click="login()">Sign in</button>
		<div class="text-center">
			<a href="/join" style="color:#000">join in</a>
		</div>
	</form>
</section>


<%@ include file="inc/footer.jsp"%>