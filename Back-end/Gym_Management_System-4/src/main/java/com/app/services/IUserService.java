package com.app.services;

import java.util.List;

import com.app.dto.Credentials;
import com.app.dto.ImageDto;
import com.app.pojos.User;

public interface IUserService {
	
	public User getById(int id);

	public User getByEmail(String email);
	
	public User authenticateUser(Credentials cred);

	public String saveUser(Credentials cred);
	
	public String updateUser(Credentials cred);
	
	public void changePassword(Credentials cred);

	public String forgotPassword(Credentials cred);

	public void deleteUser(Credentials cred);

	public List<User> getAllUsers();

	public User getUserInfo(int user_id);

	public void addUserImage(ImageDto imageDto);

	public void updateUserRole(Credentials cred);

}
