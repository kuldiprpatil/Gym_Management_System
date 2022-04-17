package com.app.dto;

import org.springframework.beans.BeanUtils;

import com.app.pojos.Plan;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class PlanDto {

	private int id;
	private String membershipPlanName;
	private int duration;
	private String startHour;
	private String endHour;
	private float price;
	private String trainerName;

	public static PlanDto fromEntity(Plan entity) {

		PlanDto planDto = new PlanDto();
		BeanUtils.copyProperties(entity, planDto);
		return planDto;
	}

	public static PlanDto fromEntityList(Plan plan) {
		PlanDto planDto = new PlanDto();
		BeanUtils.copyProperties(plan, planDto);
		return planDto;
	}

}
