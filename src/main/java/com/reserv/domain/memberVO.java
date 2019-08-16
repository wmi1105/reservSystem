package com.reserv.domain;

public class memberVO {

	int m_idx = 0;

	String name = "";
	String id = "";
	String password = "";

	String phone = "";
	String email = "";

	String region = "";
	int region_idx = 0;

	String interest = "";
	int interest_idx = 0;

	
	int number = 0;
	
	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	boolean AgreementChk = false;
	boolean personalChk = false;

	public int getM_idx() {
		return m_idx;
	}

	public void setM_idx(int m_idx) {
		this.m_idx = m_idx;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public int getRegion_idx() {
		return region_idx;
	}

	public void setRegion_idx(int region_idx) {
		this.region_idx = region_idx;
	}

	public String getInterest() {
		return interest;
	}

	public void setInterest(String interest) {
		this.interest = interest;
	}

	public int getInterest_idx() {
		return interest_idx;
	}

	public void setInterest_idx(int interest_idx) {
		this.interest_idx = interest_idx;
	}

	public boolean isAgreementChk() {
		return AgreementChk;
	}

	public void setAgreementChk(boolean agreementChk) {
		AgreementChk = agreementChk;
	}

	public boolean isPersonalChk() {
		return personalChk;
	}

	public void setPersonalChk(boolean personalChk) {
		this.personalChk = personalChk;
	}

	@Override
	public String toString() {
		return "memberVO [m_idx=" + m_idx + ", name=" + name + ", id=" + id + ", password=" + password + ", phone="
				+ phone + ", email=" + email + ", region=" + region + ", region_idx=" + region_idx + ", interest="
				+ interest + ", interest_idx=" + interest_idx + ", AgreementChk=" + AgreementChk + ", personalChk="
				+ personalChk + "]";
	}

}
