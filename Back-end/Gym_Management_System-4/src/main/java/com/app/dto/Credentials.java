package com.app.dto;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.BeanUtils;

import com.app.pojos.Plan;
import com.app.pojos.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class Credentials {

	private int id;
	private String completeName;
	private String avatar;
	private String contact;
	private String email;
	private String password;
	private String role;
	private int question;
	private String answer;
	private String address;
	private int age;
	private double height;
	private double weight;
	private int gender;
	private LocalDate joiningDate;
	private LocalDate endOfMembershipDate;
	private List<Plan> planList;

	public static Credentials allDataTODto(User allInfo) {
		Credentials cred = new Credentials();
		BeanUtils.copyProperties(allInfo, cred);
		return cred;
	}
}
