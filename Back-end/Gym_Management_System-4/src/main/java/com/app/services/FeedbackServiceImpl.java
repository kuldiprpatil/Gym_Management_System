package com.app.services;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.FeedbackRepository;
import com.app.dao.UserRespository;
import com.app.dto.FeedbackDto;
import com.app.pojos.Feedback;
import com.app.pojos.User;

@Service
@Transactional
public class FeedbackServiceImpl implements IFeedbackService {

	@Autowired
	private FeedbackRepository feedDao;
	@Autowired
	private UserRespository userDao;

	@Override
	public List<Feedback> getAllFeedbacks() {
		List<Feedback> list = feedDao.findAll();
		return list;
	}

	@Override
	public void addFeedback(FeedbackDto feed) {
		Feedback feedback = new Feedback();
		BeanUtils.copyProperties(feed, feedback);
		System.out.println(feed);
		//System.out.println("1st" + feedback);
		feedback.setTableUser(userDao.getById(feed.getUserId()));
		feedback.setResponse("Thank you for your feedback,admin will responed you soon !!!");
		System.out.println("2nd" + feedback);
		feedDao.save(feedback);

	}

	@Override
	public void deleteFeedback(FeedbackDto feeddto) {
		feedDao.deleteById(feeddto.getId());

	}

	@Override
	public List<Feedback> getUserFeedbackById(int userId) {
		User user = userDao.getById(userId);
		List<Feedback> list = feedDao.findByTableUser(user);
		for(Feedback l : list)
			System.out.println(l.getId() + " " + l.getTableUser().getCompleteName());
		return list;
	}

	@Override
	public void feedbackResponse(FeedbackDto feeddto) {
		Feedback feedback = feedDao.getById(feeddto.getId());
		feedback.setResponse(feeddto.getResponse());
		feedDao.save(feedback);
	}

}
