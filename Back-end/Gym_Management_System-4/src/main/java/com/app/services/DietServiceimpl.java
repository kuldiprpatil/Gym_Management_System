package com.app.services;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.DietRepository;
import com.app.dto.DietDto;
import com.app.pojos.Diet;

@Service
@Transactional
public class DietServiceimpl implements IDietService {

	@Autowired
	DietRepository dietDao;

	@Override
	public void addDiet(DietDto dietDto) {
		Diet tblDiet = new Diet();
		BeanUtils.copyProperties(dietDto, tblDiet);
		dietDao.save(tblDiet);
	}

	@Override
	public void updateDiet(DietDto dietDto) {
		Diet diet = dietDao.getById(dietDto.getId());
		diet.setDietName(dietDto.getDietName());
		diet.setMorning(dietDto.getMorning());
		diet.setAfternoon(dietDto.getAfternoon());
		diet.setEvening(dietDto.getEvening());
		diet.setNight(dietDto.getNight());
		dietDao.save(diet);
	}

	@Override
	public void deleteDiet(DietDto dietDto) {

		dietDao.deleteById(dietDto.getId());
	}

	@Override
	public List<Diet> getAllDietItems() {
		List<Diet> list = dietDao.findAll();
		return list;
	}

	@Override
	public Diet getDiet(int id) {
		return dietDao.getById(id);
	}
	
}
