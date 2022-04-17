package com.app.services;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.PlanRepository;
import com.app.dto.PlanDto;
import com.app.pojos.Plan;

@Service
@Transactional
public class PlanServiceImpl implements IPlanService {
	@Autowired
	private PlanRepository planDao;

	@Override
	public void createPlan(PlanDto planDto) {
		Plan plan = new Plan();
		BeanUtils.copyProperties(planDto, plan);
		planDao.save(plan);
	}

	@Override
	public Plan getPlan(int planId) {
		Plan plan = planDao.getById(planId);
		return plan;
	}

	@Override
	public void deletePlan(PlanDto planDto) {
		planDao.deleteById(planDto.getId());
	}

	@Override
	public void updatePlan(PlanDto planDto) {
		Plan plan = this.getPlan(planDto.getId());
		BeanUtils.copyProperties(planDto, plan);
		planDao.save(plan);
	}

	@Override
	public List<Plan> getAllPlans() {
		List<Plan> list = planDao.findAll();
		return list;
	}

	@Override
	public Plan findPlan(int planId) {
		return planDao.getById(planId);
	}

}
