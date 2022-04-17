package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Diet;

public interface DietRepository extends JpaRepository<Diet, Integer> {

}
