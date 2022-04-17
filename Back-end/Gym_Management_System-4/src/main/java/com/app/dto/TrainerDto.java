package com.app.dto;

import java.time.LocalDate;

import org.springframework.beans.BeanUtils;

import com.app.pojos.Trainer;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class TrainerDto {

	private int id;
	private String trainerName;
	private String avatar;
	private String contact;
	private String address;
	private float salary;
	private LocalDate joinDate;

	public static TrainerDto fromEntity(Trainer trainer) {
		TrainerDto trainerDto = new TrainerDto();
		BeanUtils.copyProperties(trainer, trainerDto);
		return trainerDto;
	}

}
