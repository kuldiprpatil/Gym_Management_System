package com.app.dao;

import java.time.LocalDate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.MemberPlan;

public interface MemberPlanRepository extends JpaRepository<MemberPlan, Integer> {

//	@Modifying
//	@Query("delete from MemberPlan where userId = :userId and planId = :planId")	
//	void deleteEntry(@Param("userId") int userId, @Param("planId") int planId);
//
	@Query("select m.subscriptionDate from MemberPlan m where m.userId = :userId and m.planId = :planId")
//	@Modifying
	LocalDate getEndDate(@Param("userId") int userId, @Param("planId") int planId);
}
