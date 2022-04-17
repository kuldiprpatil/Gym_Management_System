package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "table_diet")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Diet extends BaseEntity {

	private String dietName;
	private String day;
	private String morning;
	private String afternoon;
	private String evening;
	private String night;
}
