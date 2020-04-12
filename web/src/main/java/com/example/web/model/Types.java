package com.example.web.model;

import javax.persistence.*;

@Entity
@Table(name="types")
public class Types {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="type_id")
    private long type_id;
    private String name;


    public Types(){

    }

    public Types(long type_id, String name){
        this.type_id = type_id;
        this.name = name;
    }

    public long getType_id() {
        return type_id;
    }

    public void setType_id(long type_id) {
        this.type_id = type_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


}
