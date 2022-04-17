package com.app.contollers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.Credentials;
import com.app.dto.ImageDto;
import com.app.dto.Response;
import com.app.services.IUserService;

@CrossOrigin
@RestController
public class LoginController {
	@Autowired
	IUserService user;

	@SuppressWarnings("rawtypes")
	@RequestMapping("/update")
	public ResponseEntity<Map> update(@RequestBody Credentials cred) {
		Map<String, Object> map = new HashMap<>();
		String message = user.updateUser(cred);
		map.put("status", message);
		map.put("data", user.getById(cred.getId()));
		return ResponseEntity.ok(map);
	}

	@RequestMapping("/addUserImage")
	public ResponseEntity<?> addUserImage(@RequestParam MultipartFile thumbnail, @RequestParam String id) {
		ImageDto imageDto = new ImageDto(Integer.parseInt(id), thumbnail);
		user.addUserImage(imageDto);
		return Response.success("success");
	}
}
