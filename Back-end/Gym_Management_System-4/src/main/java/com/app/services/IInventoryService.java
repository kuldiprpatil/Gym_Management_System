package com.app.services;

import java.util.List;

import com.app.dto.InventoryDto;
import com.app.pojos.Inventory;

public interface IInventoryService {

	void addItemInfo(InventoryDto inventoryDto);

	List<Inventory> getAllInventoryItems();
}
