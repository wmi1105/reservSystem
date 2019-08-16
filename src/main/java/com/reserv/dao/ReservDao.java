package com.reserv.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.mongodb.util.Hash;
import com.reserv.domain.AccountVO;
import com.reserv.domain.memberVO;

@Repository("reservDao")
public class ReservDao {

	@Autowired
	private MongoTemplate mongo;
	
	public void insertUser(Map<String, Object> param) {

		System.out.println(param);
		mongo.insert(param, "test");

		System.out.println("suc__");
	}

	public List<memberVO> mongoList(Map<String, Object> param) {
		Query query = new Query(new Criteria().andOperator(
				Criteria.where("name").is("aaa")
		));

		List<memberVO> row = mongo.find(query, memberVO.class, "test");

		System.out.println(row);
		System.out.println(row.size());

		return row;
	}

	public Map<String, Object> login(Map<String, Object> param){
		String result = "";
		Map<String, Object> data = new HashMap<String, Object>();
		List<AccountVO> row = new ArrayList<AccountVO>();
		AccountVO vo = new AccountVO();
		
		
		try {
			Query query = new Query();
			
			String id = param.get("id").toString();
			String pass = param.get("password").toString();
			query = new Query(new Criteria().andOperator(
					Criteria.where("c_email").is(id),
					Criteria.where("c_password").is(pass)
			));

			row = mongo.find(query, AccountVO.class, "account");

			if (row.size() == 0) {
				query = new Query(new Criteria().andOperator(
						Criteria.where("c_email").is(id)
				));

				row = mongo.find(query, AccountVO.class, "account");
				
				if(row.size() == 0) result = "id";
				else result = "password";
				
			}else{
				vo = row.get(0);
				
				result = "suc";
			}
			
			data.put("info", vo);
			data.put("result", result);
			
		} catch (Exception e) {
			result = "fail";
		}
		
		
		return data;
	}

	public List<AccountVO> idOverChk(Map<String, Object> param) {
		String inputId = param.get("id").toString();
		Query query = new Query(new Criteria().andOperator(
				Criteria.where("c_email").is(inputId)
		));

		System.out.println(query);
		List<AccountVO> row = mongo.find(query, AccountVO.class, "account");
		System.out.println(row);
		return row;
	}

	public void saveAccount(AccountVO vo) {
		mongo.insert(vo, "account");
	}
}
