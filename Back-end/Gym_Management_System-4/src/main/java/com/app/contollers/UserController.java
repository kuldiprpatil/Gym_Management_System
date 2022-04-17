package com.app.contollers;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.Credentials;
import com.app.dto.DietDto;
import com.app.dto.FeedbackDto;
import com.app.dto.MemberPlanDto;
import com.app.dto.PlanDto;
import com.app.dto.Response;
import com.app.pojos.Diet;
import com.app.pojos.Feedback;
import com.app.pojos.MemberPlan;
import com.app.pojos.Plan;
import com.app.pojos.User;
import com.app.services.IDietService;
import com.app.services.IFeedbackService;
import com.app.services.IMemberPlanService;
import com.app.services.IPlanService;
import com.app.services.IUserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController

public class UserController {
	@Autowired
	IFeedbackService feedService;
	@Autowired
	IUserService tableUserService;
	@Autowired
	IMemberPlanService tblMemberPlanService;
	@Autowired
	IPlanService tblplanservice;
	@Autowired
	IDietService dietService;
	
	@RequestMapping("/getAllInfo/{user_id}")
	public ResponseEntity<?> getUserInfo(@PathVariable("user_id") int userId) {
		User allInfo = tableUserService.getUserInfo(userId);
		System.err.println("Step 1 complete=============================================================");
		Credentials dtoInfo = Credentials.allDataTODto(allInfo);
		System.err.println("Step 2 complete=============================================================");
		System.out.println(dtoInfo);
		return Response.success(dtoInfo);
	}

	@RequestMapping("/getUserPlans/{user_id}")
	public ResponseEntity<?> getUserPlans(@PathVariable("user_id") int userId) {
		User addinfo = tableUserService.getById(userId);
		System.out.println(addinfo.getPlanList());
		Stream<PlanDto> allplans = addinfo.getPlanList().stream().map(plan -> PlanDto.fromEntityList(plan));
		return Response.success(allplans);
	}
	
	@RequestMapping("/getAllDietItems")
	public ResponseEntity<?> getAllDietItems() {
		List<Diet> list = dietService.getAllDietItems();
		Stream<DietDto> trainers = list.stream().map(item -> DietDto.fromEntity(item));
		return Response.success(trainers);
	}
	
	@RequestMapping("/getUserFeedbacks/{user_id}")
	public ResponseEntity<?> getUserFeedbacks(@PathVariable("user_id") int userId) {
		System.out.println(userId);
		List<Feedback> feedList = feedService.getUserFeedbackById(userId);
		System.out.println("FEEDBACK" + feedList);
		for(Feedback l : feedList)
			System.out.println("ID" + l.getId() + " " + l.getTableUser().getCompleteName());

		Stream<FeedbackDto> feedbacks = feedList.stream().map(feedback -> FeedbackDto.fromEntity(feedback));
		//System.out.println("FEEDBACK " + feedbacks.iterator().toString());
		return Response.success(feedbacks);
	}
	
	@RequestMapping("/updateBasicInfo")
	public ResponseEntity<?> updateBasicInfo(@RequestBody Credentials cred) {
		String message = tableUserService.updateUser(cred);
		return Response.success(message);
	}

	@RequestMapping("/addUserPlan")
	public ResponseEntity<?> addUserPlan(@RequestBody MemberPlanDto mpDto) {
		System.out.println("IN ADD PLan");
		System.out.println("SUB" + mpDto.getUserId() + " " + mpDto.getSubscriptionDate());
		String message = tblMemberPlanService.addUserPlan(mpDto);
		return Response.success(message);
	}

	@RequestMapping("/deleteUserPlan")
	public ResponseEntity<?> deleteUserPlan(@RequestBody MemberPlanDto mpDto) {
		tblMemberPlanService.deleteUserPlan(mpDto);
		return Response.success("success");
	}

	@RequestMapping("/postfeedback")
	public ResponseEntity<?> addFeedback(@RequestBody FeedbackDto feed) {
		System.out.println(feed.toString());
		feedService.addFeedback(feed);
		return Response.success("success");
	}

	@RequestMapping("/endDate")
	public ResponseEntity<?> endDate(@RequestBody MemberPlanDto mpDto) {
		LocalDate endDate = tblMemberPlanService.endDate(mpDto);
		System.out.println("END-DATE" + endDate);
		MemberPlanDto memberPlan = MemberPlanDto.fromEntityList(endDate);
		return Response.success(memberPlan);
	}
}
