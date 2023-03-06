package com.sks.currency.exchange.currencyexchange.reposiroty;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sks.currency.exchange.currencyexchange.entity.CurrencyExchangeRate;

public interface ExchangeRepository extends JpaRepository <CurrencyExchangeRate, Long> {
    
    CurrencyExchangeRate findByFromAndTo(String from, String to);
}
