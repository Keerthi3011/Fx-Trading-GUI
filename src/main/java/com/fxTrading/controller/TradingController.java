package com.fxTrading.controller;

import java.util.ArrayList;
import java.util.List;

import com.fxTrading.entity.BookingDetails;
import com.fxTrading.entity.TradingDetails;
import com.fxTrading.service.TradingService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TradingController 
{
	@Autowired 
	BookingDetails bookingDetails;
	@Autowired
	TradingService service;
	
	@CrossOrigin
	@PostMapping("booktrade")
	public String bookingTrade(@RequestBody BookingDetails value)
	{
		return service.Booking(value) ;
	}
	@CrossOrigin
	@GetMapping("printtrade")
	public List<TradingDetails> printingTrade()
	{
		return service.printing();
		
	}
	
	@CrossOrigin
	@GetMapping ("exit")
	public String exit(@RequestBody String yOrN)
	{
		return service.exit(yOrN);
	}
}
