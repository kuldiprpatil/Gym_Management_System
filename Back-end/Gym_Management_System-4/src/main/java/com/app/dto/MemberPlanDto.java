package com.app.dto;

import java.time.LocalDate;

import org.hibernate.annotations.CreationTimestamp;

import com.app.pojos.MemberPlan;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class MemberPlanDto {
//	private int id;
	private int userId;
	private int planId;
	@CreationTimestamp
	private LocalDate subscriptionDate;

	public static MemberPlanDto fromEntityList(LocalDate endDate) {
		MemberPlanDto planDto = new MemberPlanDto();
		
		planDto.setSubscriptionDate(endDate.plusMonths(1));

		return planDto;
	}

}
