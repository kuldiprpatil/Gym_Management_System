package com.app.services;

import java.util.List;

import com.app.dto.FeedbackDto;
import com.app.pojos.Feedback;

public interface IFeedbackService {

	public List<Feedback> getAllFeedbacks();

	public void addFeedback(FeedbackDto feed);

	public void deleteFeedback(FeedbackDto feeddto);

	List<Feedback> getUserFeedbackById(int user_id);

	public void feedbackResponse(FeedbackDto feeddto);

}
