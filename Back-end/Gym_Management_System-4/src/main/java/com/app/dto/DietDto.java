package com.app.dto;

import org.springframework.beans.BeanUtils;

import com.app.pojos.Diet;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DietDto {

	private int id;
	private String dietName;
	private String day;
	private String morning;
	private String afternoon;
	private String evening;
	private String night;

	public static DietDto fromEntity(Diet item) {
		DietDto dietDto = new DietDto();
		BeanUtils.copyProperties(item, dietDto);
		return dietDto;
	}
}
