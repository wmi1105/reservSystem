package com.reserv.service;

import java.util.List;
import java.util.Map;

import com.reserv.domain.memberVO;

public interface ReservService {

	void insertUserInfo(Map<String, Object> param);

	List<memberVO> getMongoList(Map<String, Object> param);

	int idOverChk(Map<String, Object> param);

	void saveAccount(Map<String, Object> param);

	Map<String, Object> login(Map<String, Object> param);

}
