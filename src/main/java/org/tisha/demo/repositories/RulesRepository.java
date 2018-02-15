package org.tisha.demo.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.tisha.demo.model.Rule;

/**
 * Created by t on 2/15/2018.
 */
public interface RulesRepository extends MongoRepository<Rule, String> {
}
