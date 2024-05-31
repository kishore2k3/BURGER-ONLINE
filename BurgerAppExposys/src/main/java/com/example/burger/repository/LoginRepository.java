package com.example.burger.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.burger.model.LoginForm;

public interface LoginRepository extends JpaRepository<LoginForm,String> {

}
