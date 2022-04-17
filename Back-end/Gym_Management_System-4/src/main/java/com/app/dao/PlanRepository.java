package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Plan;

public interface PlanRepository extends JpaRepository<Plan, Integer> {

}
