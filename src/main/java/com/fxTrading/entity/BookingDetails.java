package com.fxTrading.entity;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component
@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookingDetails 
{
	private String customerName;
	private String currencyPair;
	private double amount;
}
