package org.tisha.demo.services;

import java.util.LinkedList;
import java.util.List;
import org.springframework.stereotype.Service;
import org.tisha.demo.model.Rule;

/**
 * Created by t on 2/15/2018.
 */
@Service
public class RuleServiceImpl implements RuleService {

    @Override
    public List<Rule> getAllRules() {
        List<Rule> rules = new LinkedList<>();
        rules.add(new Rule("Must be 5 characters"));
        rules.add(new Rule("Must not be used elsewhere"));
        rules.add(new Rule("Must be cool"));
        rules.add(new Rule("ZZZZZzzzzzzzzzzz"));
        return rules;
    }

}
