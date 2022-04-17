package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "table_trainer")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Trainer extends BaseEntity {

	private String trainerName;
	private String avatar;
	private String contact;
	private String address;
	private float salary;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate joinDate;
}
