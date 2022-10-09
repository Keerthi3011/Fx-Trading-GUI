package com.fxTrading.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity 
public class TradingDetails 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int tradeNo;
	private String customerName;
	private String currencyPair;
	private double amount;
	private double rate;
}
