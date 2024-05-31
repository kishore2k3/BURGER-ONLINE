package com.example.burger.model;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class RegistrationForm {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="email")
	private LoginForm email;
	private String main_email;
	private long phone_no;
	private String name;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public LoginForm getEmail() {
		return email;
	}
	public void setEmail(LoginForm email) {
		this.email = email;
	}
	public String getMain_email() {
		return main_email;
	}
	public void setMain_email(String main_email) {
		this.main_email = main_email;
	}
	public long getPhone_no() {
		return phone_no;
	}
	public void setPhone_no(long phone_no) {
		this.phone_no = phone_no;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
}
