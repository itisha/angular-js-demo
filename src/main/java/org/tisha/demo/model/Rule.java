package org.tisha.demo.model;

import lombok.Builder;
import lombok.Data;
import lombok.NonNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by t on 2/15/2018.
 */
@Data
@Builder
@Document
public class Rule {
    @Id
    private String id;
    @NonNull
    private String ruleName;
}
