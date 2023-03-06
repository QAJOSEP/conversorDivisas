package com.sks.currency.exchange.currencyexchange.controller;


import org.springframework.core.env.Environment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.sks.currency.exchange.currencyexchange.entity.CurrencyExchangeRate;
import com.sks.currency.exchange.currencyexchange.reposiroty.ExchangeRepository;

@RestController
@CrossOrigin("http://localhost:3000/")
public class Currencyexchangecontroller {
    
    @Autowired
    Environment environment;

    @Autowired
    ExchangeRepository exchangeRepository;

    @GetMapping("/currency-service/from/{from}/to/{to}")
    public CurrencyExchangeRate getCurrencyExchangeRate(@PathVariable String from, @PathVariable String to){
        
        CurrencyExchangeRate currencyExchangeRate = exchangeRepository.findByFromAndTo(from, to);

        currencyExchangeRate.setPort(Integer.parseInt(environment.getProperty("local.server.port")));
        

        return currencyExchangeRate;
    }
}
