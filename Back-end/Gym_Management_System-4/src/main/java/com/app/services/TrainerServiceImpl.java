package com.app.services;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.TrainerRepository;
import com.app.dto.ImageDto;
import com.app.dto.TrainerDto;
import com.app.pojos.Trainer;

@Service
@Transactional
public class TrainerServiceImpl implements ITrainerService {

	@Autowired
	TrainerRepository trainerDao;
//	@Autowired
//	private StorageService storageService;

	@Override
	public void addTrainer(TrainerDto trainerDto) {
		Trainer trainer = new Trainer();
		BeanUtils.copyProperties(trainerDto, trainer);
		trainerDao.save(trainer);
	}

	@Override
	public List<Trainer> getAllTrainers() {
		List<Trainer> list = trainerDao.findAll();
		return list;
	}

	@Override
	public void deleteTrainer(TrainerDto trainerDto) {
		//Trainer trainer = trainerDao.getById(trainerDto.getTrainerId());
		//storageService.delete(trainer.getAvatar());
		//trainerDao.delete(trainer);
		trainerDao.deleteById(trainerDto.getId());
	}

	@Override
	public void updateTrainer(TrainerDto trainerDto) {
		Trainer trainer = trainerDao.getById(trainerDto.getId());
		trainer.setAddress(trainerDto.getAddress());
		trainer.setContact(trainerDto.getContact());
		trainer.setSalary(trainerDto.getSalary());
		trainerDao.save(trainer);
	}

	@Override
	public void addTrainerImage(ImageDto imageDto) {
		Trainer trainer = trainerDao.getById(imageDto.getId());
		// String fileName = storageService.store(imageDto.getThumbnail());
		//String fileName = amazonClient.uploadFile(imageDto.getThumbnail());
		//trainer.setAvatar(fileName);
		trainerDao.save(trainer);
	}

}
