package com.example.burger.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.burger.model.BurgerList;
import com.example.burger.model.IngredientList;
import com.example.burger.model.LoginForm;
import com.example.burger.model.RegistrationForm;
import com.example.burger.repository.BurgerRepository;
import com.example.burger.repository.IngredientRepository;
import com.example.burger.repository.LoginRepository;
import com.example.burger.repository.RegisterRepository;

@Service
public class BurgerService {

	@Autowired
	LoginRepository lr;
	@Autowired
	BurgerRepository bs;
	@Autowired 
	IngredientRepository il;
	@Autowired
	RegisterRepository rr;
	public RegistrationForm getDataService(String i) {
		
		Integer in=Integer.parseInt(i);
		RegistrationForm dta =  rr.findById(in).get();
		return dta;
	}

	public String registerService(RegistrationForm data,String e) {
		Optional<LoginForm> dta = lr.findById(e);
		if(dta.isPresent())
		{
			return "Email Id is already Registered";
		}
		else
		{
			rr.save(data);
			String val=Integer.toString(rr.findName(e));
			return val;
		}
	}
	public String verifyDataLogin(String email, String password) {
		try {
			LoginForm userEmail = lr.findById(email).get();
			if(userEmail == null)
			{
				return "Account isn't found or email incorrect";
			}
			else 
			{
				if((userEmail.getPassword()).equals(password))
				{
					String val=Integer.toString(rr.findName(email));
					return val;
				}
				else
				{
					return "Login Unsuccessfull! Incorrect Password";
				}
			}
			}
			catch(Exception e)
			{
				return "Login Unsuccessfull! Check email and password";
			}
	}

	public List<BurgerList> getBurgerListSer() {
		return bs.findAll();
	}

	public List<IngredientList> getIngredientListSer() {
		return il.findAll();
	}
}
