package com.example.web.model;

import javax.persistence.*;

@Entity
@Table(name = "authors")
public class Authors {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long author_id;
    private String name;
    private String surname;

    @ManyToOne
    private Books bookId;


    public Authors(){

    }

    public Authors(long author_id, String name, String surname, long bookId) {
        this.author_id = author_id;
        this.name = name;
        this.surname = surname;
//        this.bookId = new Books(bookId, "", "");
    }

    public long getAuthor_id() {
        return author_id;
    }

    public void setAuthor_id(long author_id) {
        this.author_id = author_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }


    public Books getBookId() {
        return bookId;
    }

    public void setBookId(Books bookId) {
        this.bookId = bookId;
    }
}

