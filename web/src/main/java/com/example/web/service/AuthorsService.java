package com.example.web.service;

import com.example.web.model.Authors;
import com.example.web.repository.AuthorsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AuthorsService {

    @Autowired
    private AuthorsRepository authorsRepository;

    public List<Authors> getAllAuthors(long bookId){
        List<Authors> authors = new ArrayList<>();
        authorsRepository.findByBookId(bookId)
                .forEach(authors::add);
        return authors;
    }

}
