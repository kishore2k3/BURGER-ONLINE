package com.example.burger.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.burger.model.IngredientList;

public interface IngredientRepository extends JpaRepository<IngredientList,Integer> {
	
}
