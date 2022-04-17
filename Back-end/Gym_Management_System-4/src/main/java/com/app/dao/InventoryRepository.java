package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Inventory;

public interface InventoryRepository extends JpaRepository<Inventory, Integer> {

}
