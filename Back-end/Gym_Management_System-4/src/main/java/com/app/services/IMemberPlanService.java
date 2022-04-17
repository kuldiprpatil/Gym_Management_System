package com.app.services;

import java.time.LocalDate;

import com.app.dto.MemberPlanDto;
import com.app.pojos.MemberPlan;

public interface IMemberPlanService {

	String addUserPlan(MemberPlanDto mpDto);

	void deleteUserPlan(MemberPlanDto mpDto);

	LocalDate endDate(MemberPlanDto mpDto);

}
