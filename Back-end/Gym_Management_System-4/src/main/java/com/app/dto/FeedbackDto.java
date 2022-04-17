package com.app.dto;

import java.time.LocalDate;

import org.springframework.beans.BeanUtils;

import com.app.pojos.Feedback;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Setter
@Getter
@ToString
public class FeedbackDto {

	private int id;
	private String feedback;
	private String response;
	private int userId;
	private String completeName;
	private String contact;
	private LocalDate createdTimestamp;

	public static FeedbackDto fromEntity(Feedback entity) {
		FeedbackDto dto = new FeedbackDto();
		BeanUtils.copyProperties(entity, dto);
		dto.setUserId(entity.getTableUser().getId());
		dto.setCompleteName(entity.getTableUser().getCompleteName());
		dto.setContact(entity.getTableUser().getContact());
		return dto;
	}
}
