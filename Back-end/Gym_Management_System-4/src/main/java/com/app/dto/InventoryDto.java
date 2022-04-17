package com.app.dto;

import java.time.LocalDate;

import org.springframework.beans.BeanUtils;

import com.app.pojos.Inventory;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class InventoryDto {

	private int id;
	private String equipName;
	private int units;
	private String model;
	private double itemPrice;
	private LocalDate purchaseDate;

	public static InventoryDto fromEntity(Inventory item) {
		InventoryDto inventoryDto = new InventoryDto();
		BeanUtils.copyProperties(item, inventoryDto);
		return inventoryDto;
	}
}
