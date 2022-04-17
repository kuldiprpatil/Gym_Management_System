package com.app.services;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.InventoryRepository;
import com.app.dto.InventoryDto;
import com.app.pojos.Inventory;

@Service
@Transactional
public class TableInventoryServiceImpl implements IInventoryService {

	@Autowired
	InventoryRepository inventoryDao;

	@Override
	public void addItemInfo(InventoryDto inventoryDto) {

		Inventory tblInventory = new Inventory();
		BeanUtils.copyProperties(inventoryDto, tblInventory);
		inventoryDao.save(tblInventory);

	}

	@Override
	public List<Inventory> getAllInventoryItems() {
		List<Inventory> list = inventoryDao.findAll();
		return list;
	}

}
