package com.app.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "table_user")
@Setter
@Getter
@ToString
public class User extends BaseEntity {

	private String completeName;
	private String avatar;
	private String contact;
	private String email;
	private String password;
	@Column(columnDefinition = "varchar(255) default 'user'")
	private String role;
	private int question;
	private String answer;
	private String address;
	private int age;
	private double height;
	private double weight;
	private int gender;
	@Column(updatable = false)
	@CreationTimestamp
	private LocalDate joiningDate;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate endOfMembershipDate;

	@ManyToMany(cascade = CascadeType.REMOVE, fetch = FetchType.EAGER)
	@JoinTable(name = "table_user_plan", joinColumns = { @JoinColumn(name = "user_id") }, inverseJoinColumns = {
			@JoinColumn(name = "plan_id") })
	private List<Plan> planList;

	public User() {
		this.planList = new ArrayList<Plan>();
	}

	public void addPlan(Plan plan) {
		planList.add(plan);
	}

	public void removePlan(Plan plan) {
		planList.remove(plan);
	}
}
