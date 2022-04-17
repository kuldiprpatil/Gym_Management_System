package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "table_inventory")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Inventory extends BaseEntity {

	private String equipName;
	private int units;
	private String model;
	private double itemPrice;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate purchaseDate;
}
