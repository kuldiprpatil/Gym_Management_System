package com.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.UserRespository;
import com.app.dto.Credentials;
import com.app.dto.ImageDto;
import com.app.pojos.User;

@Transactional
@Service
public class UserServiceImpl implements IUserService {

	@Autowired
	private UserRespository userDao;
//	@Autowired
//	private StorageService storageService;
//	@Autowired
//	private PasswordEncoder passwordEncoder;

	@Override
	public User getById(int id) {
		Optional<User> user = userDao.findById(id);
		return user.orElse(null);
	}

	@Override
	public User getByEmail(String email) {
		User user = userDao.findByEmail(email);
		return user;
	}

	@Override
	public List<User> getAllUsers() {
		return userDao.findAll();
	}

	@Override
	public User authenticateUser(Credentials cred) {
		System.out.println("Email:" + cred.getEmail() + " " + cred.getPassword());
		User user = userDao.findByEmail(cred.getEmail());
		System.out.println(user);
		if (user != null)
			if (cred.getPassword().equals(user.getPassword()))
				return user;
		return null;
	}

	@Override
	public String saveUser(Credentials cred) {
		int counter = 0;
		List<User> list = this.getAllUsers();
		for (User tableUser : list) {
			if (tableUser.getRole().equals("admin"))
				counter = counter + 1;
		}
		System.out.println("counter :" + counter);
		for (User tableUser : list) {
			if (tableUser.getEmail().equals(cred.getEmail()))
				return "email already taken";
		}
		User tbUser = new User();
		BeanUtils.copyProperties(cred, tbUser);
//		String encPassword = passwordEncoder.encode(tbUser.getPassword());
		tbUser.setPassword(cred.getPassword());
		tbUser.setId(0);
		if (counter > 0) {
			tbUser.setRole("user");
		} else {
			tbUser.setRole("admin");
		}
		userDao.save(tbUser);
		return "success";
	}

	@Override
	public String updateUser(Credentials cred) {

		User tbUser = getById(cred.getId());
		tbUser.setContact(cred.getContact());
		tbUser.setAddress(cred.getAddress());
		tbUser.setHeight(cred.getHeight());
		tbUser.setAge(cred.getAge());
		tbUser.setWeight(cred.getWeight());
		tbUser.setJoiningDate(cred.getJoiningDate());
		tbUser.setGender(cred.getGender());
		userDao.save(tbUser);
		return "success";
	}

	@Override
	public void changePassword(Credentials cred) {
		User tbUser = userDao.findByEmail(cred.getEmail());
		// String encPassword = passwordEncoder.encode(cred.getPassword());
		tbUser.setPassword(cred.getPassword());
		userDao.save(tbUser);
	}

	@Override
	public String forgotPassword(Credentials cred) {
		User user = userDao.findByEmail(cred.getEmail());
		System.out.println(user);
		if (user == null) {
			return "No Such Email Found!!!!";
		}
		if (user.getQuestion() != cred.getQuestion()) {
			return "Try Another Question !!";
		} else if (!(user.getAnswer().equals(cred.getAnswer()))) {
			return "Wrong Answer";
		} else
			return "Success";
	}

	@Override
	public void deleteUser(Credentials cred) {
		userDao.deleteById(cred.getId());
	}

	@Override
	public User getUserInfo(int userId) {
		System.err.println(userDao.getById(userId));
		return userDao.getById(userId);
	}

	@Override
	public void addUserImage(ImageDto imageDto) {
		User user = userDao.getById(imageDto.getId());
		// String fileName = storageService.store(imageDto.getThumbnail());
		// String fileName = amazonClient.uploadFile(imageDto.getThumbnail());
		// user.setAvatar(fileName);
		userDao.save(user);
	}

	@Override
	public void updateUserRole(Credentials cred) {
		User user = getById(cred.getId());
		user.setRole("admin");
		userDao.save(user);
	}
}
