package org.tisha.demo.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.tisha.demo.model.Rule;
import org.tisha.demo.services.RuleService;

/**
 * Created by t on 2/15/2018.
 */
@RestController
@RequestMapping("api")
public class RulesController {

    private RuleService ruleService;

    @Autowired
    public RulesController(RuleService ruleService) {
        this.ruleService = ruleService;
    }

    @GetMapping()
    public List<Rule> getAllRules() {
        return ruleService.getAllRules();
    }


    @PostMapping()
    public Rule addRule(@RequestBody Rule rule) {
        return ruleService.addRule(rule);
    }
}
