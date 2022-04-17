package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.User;

public interface UserRespository extends JpaRepository<User, Integer> {

	User findByEmail(String email);
}
