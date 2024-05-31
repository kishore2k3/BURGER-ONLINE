package com.example.burger.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class LoginForm {
	@Id
	private String email;
	private String password;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public LoginForm() {
		super();
		// TODO Auto-generated constructor stub
	}
}
