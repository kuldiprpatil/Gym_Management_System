package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "table_plan")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Plan extends BaseEntity {
	
	private String membershipPlanName;
	private int  duration;
	private String startHour;
	private String endHour;
	private float price;
	private String trainerName;
}
