package com.fxTrading.repository;

import com.fxTrading.entity.TradingDetails;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TradingRepository extends JpaRepository<TradingDetails, Integer>
{
	
}
