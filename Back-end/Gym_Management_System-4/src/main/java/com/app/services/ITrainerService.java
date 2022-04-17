package com.app.services;

import java.util.List;

import com.app.dto.ImageDto;
import com.app.dto.TrainerDto;
import com.app.pojos.Trainer;

public interface ITrainerService {

	void addTrainer(TrainerDto trainerDto);

	List<Trainer> getAllTrainers();

	void deleteTrainer(TrainerDto trainerDto);

	void updateTrainer(TrainerDto trainerDto);

	void addTrainerImage(ImageDto imageDto);

}
