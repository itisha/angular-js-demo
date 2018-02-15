package org.tisha.demo.bootstrap;

import java.util.LinkedList;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.tisha.demo.model.Rule;
import org.tisha.demo.repositories.RulesRepository;

/**
 * Created by t on 2/15/2018.
 */
@Component
@Slf4j
public class Bootstrap implements ApplicationListener<ContextRefreshedEvent> {

    private RulesRepository rulesRepository;

    @Autowired
    public Bootstrap(RulesRepository ruleService) {
        this.rulesRepository = ruleService;
    }

    @Override
    @Transactional
    public void onApplicationEvent(ContextRefreshedEvent event) {
        log.debug("Loading Bootstrap Data ...");
        List<Rule> rules = new LinkedList<>();
        rules.add(Rule.builder().ruleName("Must be 5 characters").build());
        rules.add(Rule.builder().ruleName("Must not be used elsewhere").build());
        rules.add(Rule.builder().ruleName("Must be cool").build());
        rules.add(Rule.builder().ruleName("Must be fetched from database").build());
        rulesRepository.insert(rules);
        log.debug("Bootstrap Data Loaded");
    }
}
