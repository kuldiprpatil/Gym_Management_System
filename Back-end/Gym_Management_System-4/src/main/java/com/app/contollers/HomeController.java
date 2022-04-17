package com.app.contollers;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.Credentials;
import com.app.dto.FeedbackDto;
import com.app.dto.Response;
import com.app.dto.TrainerDto;
import com.app.pojos.Feedback;
import com.app.pojos.Trainer;
import com.app.pojos.User;
import com.app.services.IFeedbackService;
import com.app.services.ITrainerService;
import com.app.services.IUserService;


@CrossOrigin
@RestController
public class HomeController {

	@Autowired
	private ITrainerService trainerService;
	@Autowired
	private IFeedbackService feedbackService;
	@Autowired
	private IUserService userService;

	@RequestMapping("/getAllTrainers")
	public ResponseEntity<?> getAllTrainers() {
		List<Trainer> list = trainerService.getAllTrainers();
		Stream<TrainerDto> trainers = list.stream().map(trainer -> TrainerDto.fromEntity(trainer));
		System.out.println(list);
		return Response.success(trainers);
	}

	@RequestMapping("/getAllfeedbacks")
	public ResponseEntity<?> getAllFeedbacks() {
		List<Feedback> list = feedbackService.getAllFeedbacks();
		Stream<FeedbackDto> feedbacks = list.stream().map(feedback -> FeedbackDto.fromEntity(feedback));
		return Response.success(feedbacks);
	}

	@RequestMapping("/signin")
	public ResponseEntity<?> login(@RequestBody Credentials cred) {
		Credentials usercred = new Credentials();
		User tu = userService.authenticateUser(cred);
		BeanUtils.copyProperties(tu, usercred);
		if (tu != null)
			return Response.success(usercred);
		else
			return Response.error("error");
	}

	@RequestMapping("/signup")
	public ResponseEntity<?> signup(@RequestBody Credentials cred) {
		String message = userService.saveUser(cred);
		return Response.success(message);
	}

	@RequestMapping("/forgotpassword")
	public ResponseEntity<?> forgotPassword(@RequestBody Credentials cred) {
		String message = userService.forgotPassword(cred);
		return Response.success(message);
	}

	@RequestMapping("/changepassword")
	public ResponseEntity<?> changePassword(@RequestBody Credentials cred) {
		userService.changePassword(cred);
		return Response.success("success");
	}
}
