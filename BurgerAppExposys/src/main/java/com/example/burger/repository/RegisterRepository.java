package com.example.burger.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.burger.model.RegistrationForm;

public interface RegisterRepository extends JpaRepository<RegistrationForm,Integer> {
	@Query("select r.id from RegistrationForm r where r.main_email=?1")
	int findName(String email);

}
