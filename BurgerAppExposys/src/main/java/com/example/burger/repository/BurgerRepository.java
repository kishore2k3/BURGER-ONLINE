package com.example.burger.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.burger.model.BurgerList;

public interface BurgerRepository extends JpaRepository<BurgerList, Integer>{

}
