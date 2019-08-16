<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>

<%@ include file="inc/header.jsp"%>
<%@ include file="inc/nav.jsp"%>


<section>
	<div class="container"  >
		<div class="panel">
			<div class="row">
				<div class="card" style="width:100%">
				  <div class="card-body text-center">
				    <blockquote class="blockquote mb-0">
				      <p>Reservation to Music studio</p>
				      <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
				    </blockquote>
				  </div>
				</div>
			</div>
		</div>
		
		<div class="panel" style="gorder:1px solid red;">
			<div class="form-group row pt-1 pb-1 " style="background-color: bisque;">
				<div class="col-2">
					<select class="form-control">
						<option>지역</option>
					</select>
				</div>
				<div class="col-2">
					<select class="form-control">
						<option>구</option>
					</select>
				</div>
				<div class="col-2">
					<select class="form-control">
						<option>동</option>
					</select>
				</div>
				<div class="col-2">
					<select class="form-control">
						<option>업체명</option>
					</select>
				</div>
				<div class="input-group col-4">
					<input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
					  <div class="input-group-append">
					    <button class="btn btn-outline-secondary" type="button">Button</button>
					  </div>
				</div>
				<div class="col-2">
					<select class="form-control">
						<option>타입</option>
					</select>
				</div>
				<div>
					
				</div>
			</div>
			
			
			<div class="form-group row">
				<div class="col-6">
					<%-- <%@ include file="./cal.jsp"%> --%>
				</div>
				<div class="col-6">시간</div>
			</div>
			<div class="form-group row">
				공실표시
			</div>
		</div>
			
			
		
	</div><!-- /.container -->
	

</section>



<%@ include file="inc/footer.jsp"%>
