package com.reserv.serviceImpl;

import java.util.List;
import java.util.Map;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.reserv.dao.ReservDao;
import com.reserv.domain.*;
import com.reserv.service.ReservService;

@Service("reservService")
public class ReservServiceImpl implements ReservService{

	@Autowired
	private ReservDao dao;
	private ObjectMapper mapper = new ObjectMapper();
	
	@Override
	public void insertUserInfo(Map<String, Object> param) {
		// TODO Auto-generated method stub
		dao.insertUser(param);
	}

	@Override
	public List<memberVO> getMongoList(Map<String, Object> param) {
		return dao.mongoList(param);
	}

	@Override
	public int idOverChk(Map<String, Object> param) {
		List<AccountVO> map = dao.idOverChk(param);
		
		return map.size();
	}

	@Override
	public void saveAccount(Map<String, Object> param) {
		AccountVO vo = mapper.convertValue(param, AccountVO.class);
		dao.saveAccount(vo);
	}

	@Override
	public Map<String, Object> login(Map<String, Object> param) {
		
		Map<String, Object> data = dao.login(param);
		return data;
	}

}
