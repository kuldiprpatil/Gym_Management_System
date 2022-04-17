package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "table_feedback")
@Getter
@Setter
@ToString
public class Feedback extends BaseEntity {
	
	private String feedback;
	@Column(length = 500)
	private String response;
	@Column(updatable = false)
	@CreationTimestamp
	private LocalDate createdTimestamp;
	@ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id")
	@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
	private User tableUser;

	public Feedback() {
		this.tableUser = new User();
	}

	public Feedback(int feedId, String feedback, LocalDate createdTimestamp, User tableUser) {
		super(feedId);
		this.feedback = feedback;
		this.createdTimestamp = createdTimestamp;
		this.tableUser = tableUser;
	}
}
