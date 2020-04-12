package com.example.web.model;

import javax.persistence.*;

@Entity
@Table(name="books")
public class Books {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="book_id")
    private long book_id;
    private String name;
    private String num_of_copies;


    public Books(){}

    public Books(long book_id, String name, String num_of_copies) {
        this.book_id = book_id;
        this.name = name;
        this.num_of_copies = num_of_copies;
    }

    public long getBook_id() {
        return book_id;
    }

    public void setBook_id(long book_id) {
        this.book_id = book_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public String getNum_of_copies() {
        return num_of_copies;
    }

    public void setNum_of_copies(String num_of_copies) {
        this.num_of_copies = num_of_copies;
    }

}
