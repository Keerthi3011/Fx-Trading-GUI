package com.fxTrading.service;

import java.util.ArrayList;
import java.util.List;

import com.fxTrading.entity.BookingDetails;
import com.fxTrading.entity.TradingDetails;
import com.fxTrading.repository.TradingRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TradingService 
{
	@Autowired 
	TradingRepository repository;
	
	TradingDetails details = new TradingDetails();
	
	final double rate =66.0;
	public String Booking(BookingDetails value)
	{	details.setCustomerName(value.getCustomerName()); 
			details.setCurrencyPair(value.getCurrencyPair().toUpperCase());
			details.setAmount(rate*value.getAmount());
			details.setRate(rate);
			repository.save(details);
			return "Trade is Booked";
	}
	
	public List<TradingDetails> printing()
	{
		return repository.findAll();
	}

	public String exit(String yOrN) {
		if(yOrN .equalsIgnoreCase("yes"))
			return "Have a nice day";
		return null;
	}

}
