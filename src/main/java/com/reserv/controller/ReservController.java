package com.reserv.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.reserv.domain.memberVO;
import com.reserv.service.ReservService;

@Controller
@RequestMapping(value="/reserv/*")
public class ReservController {

	@Resource(name = "reservService")
	private ReservService reservService;
	
	
	@RequestMapping(value="/mongoinputajax", method=RequestMethod.POST)
	public @ResponseBody Map<String, Object> MongoInputAjax(@RequestParam Map<String, Object> param){
		Map<String, Object> data = new HashMap<String, Object>();
		
		int result = 0;
		try {
			reservService.insertUserInfo(param);
			result = 1;
		} catch (Exception e) {
			// TODO: handle exception
		}
		
		data.put("result", result);
		return data;
	}
	
	
	@RequestMapping(value="mongolistajax", method=RequestMethod.POST)
	public @ResponseBody Map<String, Object> MongoListAjax(@RequestParam Map<String, Object> param){
		Map<String, Object> data = new HashMap<String, Object>();
		
		List<memberVO> rows = reservService.getMongoList(param);
		
		if(rows == null){System.out.println("not option");}
		else{
			data.put("rows", rows);
		}
		
		return data;
	}
	
	@RequestMapping(value="login", method=RequestMethod.POST)
	public @ResponseBody Map<String, Object> login(@RequestParam Map<String, Object> param){
		Map<String, Object> data = reservService.login(param);
		return data;
	}
	
	@RequestMapping(value="idOverChk", method=RequestMethod.POST)
	public @ResponseBody int idOverChk(@RequestParam Map<String, Object> param){
		int result = reservService.idOverChk(param);
		return result;
	}

	@RequestMapping(value="saveAccount", method=RequestMethod.POST)
	public @ResponseBody int saveAccount(@RequestParam Map<String, Object> param){
		int result = 0;
		try {
			System.out.println(param);
			reservService.saveAccount(param);
			result = 1;
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
		
		return result;
	}
	
	
}
