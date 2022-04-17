package com.app.services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.MemberPlanRepository;
import com.app.dto.MemberPlanDto;
import com.app.pojos.MemberPlan;
import com.app.pojos.Plan;
import com.app.pojos.User;

@Service
@Transactional
public class MemberPlanServiceImpl implements IMemberPlanService {
	@Autowired
	MemberPlanRepository memberPlanDao;
	@Autowired
	IUserService userService;
	@Autowired
	IPlanService planService;
	@Override
	public String addUserPlan(MemberPlanDto mpDto) {
		User allInfo = userService.getById(mpDto.getUserId());
		System.out.println("USER: " + allInfo);
		Plan plan = planService.getPlan(mpDto.getPlanId());
		System.out.println("PLAN: " + plan);
		List<Plan> list = allInfo.getPlanList();
		for(Plan p : list)
			System.out.println("PLAN" + p);
		for (Plan planList : list) {
			System.out.println("Plan Id:" + planList.getId() + " DTO:" + mpDto.getPlanId());
			if (planList.getId() == plan.getId())
				return "Plan Already Subscribed";
		}
		allInfo.addPlan(plan);

		MemberPlan userplan = new MemberPlan();
		BeanUtils.copyProperties(mpDto, userplan);
		System.out.println(userplan.getSubscriptionDate());
		memberPlanDao.save(userplan);
		return "success";
	}

	@Override
	public void deleteUserPlan(MemberPlanDto mpDto) {
		//memberPlanDao.deleteEntry(mpDto.getUserId(), mpDto.getPlanId());
	}

	@Override
	public LocalDate endDate(MemberPlanDto mpDto) {
		LocalDate endDate = memberPlanDao.getEndDate(mpDto.getUserId(), mpDto.getPlanId());
		//System.out.println("MP: " + endDate.getSubscriptionDate());
		return endDate;
	}

}
