<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="inc/header.jsp"%>

<div class="container" ng-controller="reservCtrl">
	<div class="py-5 text-center">
		<!-- <img class="d-block mx-auto mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"> -->
		<!-- <h2>Checkout form</h2>
    <p class="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p> -->
	</div>
	<div class="row">
		<div class="col-md-8 offset-md-2">
			<form id="accountForm" class="needs-validation" novalidate>
				<div class="form-row">
					<div class="col-md-6 mb-3">
						<label for="firstName">Name</label>
						<input type="text" class="form-control" name="c_name" id="name" placeholder="" value="" ng-keypress="focusCtrl($event, 'name', 'email')" required>
					</div>
				</div>
				<div class="mb-3">
					<label for="email">Email ID<span class="overChk_msg" ng-show="overChk_msg != ''">&emsp; {{overChk_msg}}</span></label>
					<div class="input-group">
						<input type="email" ng-class="(overChk_msg == 'Invalid')?'form-control is-invalid':'form-control'" name="c_email" id="email" placeholder="This email will be used as a login ID." ng-keypress="focusCtrl($event,'email', 'idOverChk')" required>
						<div class="input-group-append">
							<button class="btn btn-outline-secondary" id="idOverChk" type="button" id="button-addon2" ng-click="idOverChk()">overChk</button>
						</div>
					</div>
					
				</div>
				<div class="mb-3" ng-init="password = ''; passwordChk = ''">
					<label for="password">password</label>
					<input type="text" class="form-control" name="c_password" id="password" ng-model="password" value="" ng-keypress="focusCtrl($event,'password', 'passwordChk')" required>
				</div>
				<div class="mb-3">
					<label for="password">password Chk &emsp;
					<font color="red" ng-show="passwordChk != '' && password != passwordChk">Passwords do not match</font>
					<font color="green" ng-show="password != '' && password == passwordChk">Verified</font>
					</label>
					<input type="text" class="form-control" id="passwordChk" ng-model="passwordChk" value="" ng-keypress="(password != '' && password == passwordChk)?focusCtrl($event, 'passwordChk', 'phone'):''" required>
				</div>
				<div class="mb-3">
					<label for="phone">Phone number <font style="color: gray;font-size: 12px;">&emsp; Please just enter the number.</font></label>
					<input type="text" class="form-control" name="c_phone" id="phone" ng-keyup="telInputChk($event)" ng-focus="chkPhoneType('focus')" ng-blur="chkPhoneType('blur')"  ng-keypress="focusCtrl($event,'phone', 'region')" required>
				</div>
				<div class="row">
					<div class="col-md-4 mb-3">
						<label for="state">region</label>
						<select class="custom-select d-block w-100" name="region" id="region">
							<option value="">Choose...</option>
							<option value="10"> 서울</option>
							<option value="20"> 강원</option>
							<option value="30"> 대전</option>
							<option value="31"> 충남</option>
							<option value="33"> 세종</option> 
							<option value="36"> 충북</option>
							<option value="40"> 인천</option>
							<option value="41"> 경기</option>
							<option value="50"> 광주</option>
							<option value="51"> 전남</option>
							<option value="56"> 전북</option>
							<option value="60"> 부산</option>
							<option value="62"> 경남</option>
							<option value="68"> 울산</option>
							<option value="69"> 제주</option>
							<option value="70"> 대구</option>
							<option value="71"> 경북</option>
							<option value="99"> 기타</option>
						</select>
					</div>
					<div class="col-md-8 mb-3">
						<label for="country">Interest</label>
						<div class="row">
							<div class="col-md-6">
								<select class="custom-select d-block w-100" name="interest" id="interest" ng-model="interest">
									<option value="">Choose...</option>
									<option value=" instrument">악기</option>
									<option value="vocal">보컬</option>
									<option value="dance">댄스</option>
									<option value="act">연기</option>
									<option value="etc">직접입력</option>
								</select>
							</div>
							<div class="col-md-6">
								<input type="text" class="form-control" name="inter_txt" ng-readonly="interest !='etc'">
							</div>
						</div>
					</div>
				</div>
				<hr class="mb-4">
				<div class="custom-control custom-checkbox">
					<input type="checkbox" class="custom-control-input" id="agreementChk" name="agreementChk" required>
					<label class="custom-control-label" for="agreementChk">Agreement to the Terms and Conditions</label>
				</div>
				<div class="custom-control custom-checkbox">
					<input type="checkbox" class="custom-control-input" id="personalChk" name="personalChk" required>
					<label class="custom-control-label" for="personalChk">consent to the use of personal information</label>
				</div>
				<hr class="mb-4">
				<button class="btn btn-primary btn-lg btn-block" type="button" ng-click="saveAccount() ">Joining</button>
			</form>
		</div>
	</div>
	<footer class="my-5 pt-5 text-muted text-center text-small">
	<p class="mb-1">
		&copy; 2019 ellen's Company
	</p>
	<!-- <ul class="list-inline">
      <li class="list-inline-item"><a href="#">Privacy</a></li>
      <li class="list-inline-item"><a href="#">Terms</a></li>
      <li class="list-inline-item"><a href="#">Support</a></li>
    </ul> -->
	</footer>
</div>

<%@ include file="inc/footer.jsp"%>