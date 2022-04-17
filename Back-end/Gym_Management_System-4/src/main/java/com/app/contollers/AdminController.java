package com.app.contollers;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.Credentials;
import com.app.dto.DietDto;
import com.app.dto.FeedbackDto;
import com.app.dto.ImageDto;
import com.app.dto.InventoryDto;
import com.app.dto.PlanDto;
import com.app.dto.Response;
import com.app.dto.TrainerDto;
import com.app.pojos.Inventory;
import com.app.pojos.Plan;
import com.app.pojos.User;
import com.app.services.IDietService;
import com.app.services.IFeedbackService;
import com.app.services.IPlanService;
import com.app.services.ITrainerService;
import com.app.services.IUserService;
import com.app.services.IInventoryService;

@CrossOrigin
@RestController

public class AdminController {
	@Autowired
	IFeedbackService feedService;
	@Autowired
	IUserService userService;
	@Autowired
	IPlanService planService;
	@Autowired
	ITrainerService trainerService;
	@Autowired
	IInventoryService inventoryService;
	@Autowired
	IDietService dietService;

	@RequestMapping("/getAllPlans")
	public ResponseEntity<?> getAllPlans() {
		List<Plan> list = planService.getAllPlans();
		Stream<PlanDto> plans = list.stream().map(plan -> PlanDto.fromEntity(plan));
		return Response.success(plans);
	}

	@RequestMapping("/getallusers")
	public ResponseEntity<?> getAllUsers() {
		List<User> list = userService.getAllUsers();
		for (User u : list)
			System.out.println(u);
		Stream<Credentials> allusers = list.stream().map(user -> Credentials.allDataTODto(user));
		// System.out.println(allusers.iterator().toString());
		return Response.success(allusers);
	}

	@RequestMapping("/deleteuser")
	public ResponseEntity<?> deleteUser(@RequestBody Credentials cred) {
		userService.deleteUser(cred);
		return Response.success("success");
	}

	@RequestMapping("/updateUserRole")
	public ResponseEntity<?> updateUserRole(@RequestBody Credentials cred) {
		userService.updateUserRole(cred);
		return Response.success("success");
	}

	@RequestMapping("/addTrainer")
	public ResponseEntity<?> addTrainer(@RequestBody TrainerDto trainerDto) {
		trainerService.addTrainer(trainerDto);
		return Response.success("success");
	}

	@RequestMapping("/deleteTrainer")
	public ResponseEntity<?> deleteTrainer(@RequestBody TrainerDto trainerDto) {
		trainerService.deleteTrainer(trainerDto);
		return Response.success("success");
	}

	@RequestMapping("/updatePlan")
	public ResponseEntity<?> updatePlan(@RequestBody PlanDto plandto) {
		planService.updatePlan(plandto);
		return Response.success("success");
	}

	@RequestMapping("/deletePlan")
	public ResponseEntity<?> deletePlan(@RequestBody PlanDto plandto) {
		planService.deletePlan(plandto);
		return Response.success("success");
	}

	@RequestMapping("/createPlan")
	public ResponseEntity<?> createPlan(@RequestBody PlanDto plandto) {
		planService.createPlan(plandto);
		return Response.success("success");
	}

	@RequestMapping("/singlePlan")
	public ResponseEntity<?> getSinglePlan(@RequestBody PlanDto plandto) {
		System.out.println("IN SIngle");
		Plan plan = planService.findPlan(plandto.getId());
		System.out.println(plan);
		return Response.success(plan);
	}

	@RequestMapping("/deletefeedback")
	public ResponseEntity<?> deleteFeedbacks(@RequestBody FeedbackDto feeddto) {
		System.out.println(feeddto.toString());
		feedService.deleteFeedback(feeddto);
		return Response.success("success");
	}

	@RequestMapping("/feedbackResponse")
	public ResponseEntity<?> feedbackResponse(@RequestBody FeedbackDto feeddto) {
		feedService.feedbackResponse(feeddto);
		return Response.success("success");
	}

	@RequestMapping("/addDiet")
	public ResponseEntity<?> addDiet(@RequestBody DietDto dietDto) {
		dietService.addDiet(dietDto);
		return Response.success("success");
	}

	@RequestMapping("/updateDiet")
	public ResponseEntity<?> updateDiet(@RequestBody DietDto dietDto) {
		dietService.updateDiet(dietDto);
		return Response.success("success");
	}

	@RequestMapping("/deleteDiet")
	public ResponseEntity<?> deleteDiet(@RequestBody DietDto dietDto) {
		dietService.deleteDiet(dietDto);
		return Response.success("success");
	}

	@RequestMapping("/sindleDiet")
	public ResponseEntity<?> singleDiet(@RequestBody DietDto dietDto) {
		dietService.getDiet(dietDto.getId());
		return Response.success("success");
	}

	@RequestMapping("/getAllInventoryItems")
	public ResponseEntity<?> getAllInventoryItems() {
		List<Inventory> list = inventoryService.getAllInventoryItems();
		Stream<InventoryDto> trainers = list.stream().map(item -> InventoryDto.fromEntity(item));
		return Response.success(trainers);
	}

	@RequestMapping("/addItemInfo")
	public ResponseEntity<?> addItemInfo(@RequestBody InventoryDto inventoryDto) {
		inventoryService.addItemInfo(inventoryDto);
		return Response.success("success");
	}

	@RequestMapping("/addTrainerImage")
	public ResponseEntity<?> addTrainerImage(@RequestParam MultipartFile thumbnail, @RequestParam String id) {
		ImageDto imageDto = new ImageDto(Integer.parseInt(id), thumbnail);
		trainerService.addTrainerImage(imageDto);
		return Response.success("success");
	}

	@RequestMapping("/updateTrainer")
	public ResponseEntity<?> updateTrainer(@RequestBody TrainerDto trainerDto) {
		trainerService.updateTrainer(trainerDto);
		return Response.success("success");
	}
}
