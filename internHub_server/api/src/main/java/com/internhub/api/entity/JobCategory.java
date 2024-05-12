package com.internhub.api.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "categories") // Note: table name should match exactly with the table name in the database
public class JobCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    public JobCategory() {
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setId(int skillId) {
        this.id = skillId;
    }

    public void setName(String nane) {
        this.name = nane;
    }

}
