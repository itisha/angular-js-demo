package org.tisha.demo.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.tisha.demo.model.Rule;
import org.tisha.demo.repositories.RulesRepository;

/**
 * Created by t on 2/15/2018.
 */
@Service
public class RuleServiceImpl implements RuleService {

    private RulesRepository rulesRepository;

    @Autowired
    public RuleServiceImpl(RulesRepository rulesRepository) {
        this.rulesRepository = rulesRepository;
    }

    @Override
    public List<Rule> getAllRules() {
        return rulesRepository.findAll();
    }

    @Override
    public Rule addRule(Rule rule) {
        return rulesRepository.save(rule);
    }

}
