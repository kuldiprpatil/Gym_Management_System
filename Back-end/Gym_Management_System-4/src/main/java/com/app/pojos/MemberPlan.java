package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "table_member_plan")
@NoArgsConstructor
@Getter
@Setter
public class MemberPlan extends BaseEntity{

	private int userId;
	private int planId;
	@Column(updatable = false)
	@CreationTimestamp
	private LocalDate subscriptionDate;
}
