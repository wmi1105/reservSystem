<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="inc/header.jsp"%>
<%@ include file="inc/nav.jsp"%>


<section>
	<div class="container">
		<div id="mongodbinputdiv">
			<button name="subject" class="btn btn-warnning" id="btn-mongoinputtest" ng-click="mongoEvent()">몽고디비 값 입력</button>
			<input type="text" id="inname" placeholder="input name" >
			<input type="text" id="inage" placeholder="input age">
		</div>
		<br>
		<div id="mongodblistdiv">
			<button name="subject" class="btn btn-warning" id="btn-mongolisttest" ng-click="mongoList()">몽고디비 리스트 출력</button>
			<input type="text" id="searchname" placeholder="search name">
			<input type="text" id="searchage" placeholder="search age">
			<input type="text" id="option" placeholder="all data is 'all' not 'not'"> 
		</div>
	</div>
	
	<div class="list">
		<ul>
			<li ng-repeat="rows in list">{{rows.name}} : {{rows.age}} : {{rows.number}}</li>
		</ul>
	</div>
	
</section>

<%@ include file="inc/footer.jsp"%>