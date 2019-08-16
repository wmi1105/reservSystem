package com.reserv.domain;

import org.springframework.data.annotation.Id;

public class AccountVO {

	@Id
	private String id = ""; // 고유id index

	private String c_name = "";
	private String c_id = "";
	private String c_password = "";

	private String c_phone = "";
	private String c_email = "";

	private String region = "";

	private String interest = "";
	private String inter_txt = "";

	boolean agreementChk = false;
	boolean personalChk = false;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getC_name() {
		return c_name;
	}

	public void setC_name(String c_name) {
		this.c_name = c_name;
	}

	public String getC_id() {
		return c_id;
	}

	public void setC_id(String c_id) {
		this.c_id = c_id;
	}

	public String getC_password() {
		return c_password;
	}

	public void setC_password(String c_password) {
		this.c_password = c_password;
	}

	public String getC_phone() {
		return c_phone;
	}

	public void setC_phone(String c_phone) {
		this.c_phone = c_phone;
	}

	public String getC_email() {
		return c_email;
	}

	public void setC_email(String c_email) {
		this.c_email = c_email;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public String getInterest() {
		return interest;
	}

	public void setInterest(String interest) {
		this.interest = interest;
	}

	public String getInter_txt() {
		return inter_txt;
	}

	public void setInter_txt(String inter_txt) {
		this.inter_txt = inter_txt;
	}

	public boolean isAgreementChk() {
		return agreementChk;
	}

	public void setAgreementChk(String chk) {
		if (chk.equals("on"))
			this.agreementChk = true;
	}

	public boolean isPersonalChk() {
		return personalChk;
	}

	public void setPersonalChk(String chk) {
		if (chk.equals("on"))
			this.personalChk = true;
	}

	@Override
	public String toString() {
		return "AccountVO [id=" + id + ", c_name=" + c_name + ", c_id=" + c_id + ", c_password=" + c_password
				+ ", c_phone=" + c_phone + ", c_email=" + c_email + ", region=" + region + ", interest=" + interest
				+ ", inter_txt=" + inter_txt + ", agreementChk=" + agreementChk + ", personalChk=" + personalChk + "]";
	}

}
