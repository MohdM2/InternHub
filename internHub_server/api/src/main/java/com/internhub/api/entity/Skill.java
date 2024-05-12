package com.internhub.api.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "skills") // Note: table name should match exactly with the table name in the database
public class Skill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    public Skill() {
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

    @Override
    public String toString() {
        return "Skill{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
