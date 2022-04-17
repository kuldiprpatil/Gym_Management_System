package com.app.services;

import java.util.List;

import com.app.dto.DietDto;
import com.app.pojos.Diet;

public interface IDietService {

	void addDiet(DietDto dietDto);

	void updateDiet(DietDto dietDto);

	void deleteDiet(DietDto dietDto);

	List<Diet> getAllDietItems();

	public Diet getDiet(int id);
}
