package com.example.burger.controller;

import java.util.List;

//import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.burger.model.BurgerList;
import com.example.burger.model.IngredientList;
import com.example.burger.model.LoginForm;
import com.example.burger.model.RegistrationForm;
import com.example.burger.service.BurgerService;


@RestController
@CrossOrigin("http://localhost:3000/")
public class BurgerController {
	@Autowired
	BurgerService bs;
	@GetMapping("/getData/{id}")
	public RegistrationForm getData(@PathVariable("id") String i)
	{
		
		return bs.getDataService(i);
	}
	@PostMapping("/register/{email}")
	public String register(@RequestBody RegistrationForm data,@PathVariable("email") String e)
	{
		return bs.registerService(data,e);
	}
	@PostMapping("/verifyLogin")
	public String verifyLogin(@RequestBody LoginForm data)
	{
		String userEmail = data.getEmail();
		String userPassword = data.getPassword();
		return bs.verifyDataLogin(userEmail,userPassword);
	}
	@GetMapping("/getBurgerList")
	public List<BurgerList> getBurgerist(){
		return bs.getBurgerListSer();
	}
	@GetMapping("/getIngredientList")
	public List<IngredientList> getIngredientist(){
		return bs.getIngredientListSer();
	}
}
