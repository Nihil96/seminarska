package com.example.web.controler;

import com.example.web.model.Authors;
import com.example.web.model.Books;
import com.example.web.repository.AuthorsRepository;
import com.example.web.service.AuthorsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AuthorsController {

    @Autowired
    private AuthorsRepository authorsRepository;

    @Autowired
    private AuthorsService authorsService;

    @GetMapping("/books/{id}/authors")
    public List<Authors> getAllAuthors(@PathVariable("id") Long id){
        return authorsRepository.findAll();
    }


    @GetMapping("/books/{booksId}/authors/{id}")
    public List<Authors> getAuthor(@PathVariable("id") Long id){
        return authorsService.getAllAuthors(id);
    }

    @PostMapping("/books/{booksId}/authors")
    public void addAuthor(@RequestBody Authors author, @PathVariable("booksId") Long id){
        author.setBookId(new Books(id, "", ""));
        authorsRepository.save(author);
    }

    @PutMapping("/books/{booksId}/authors{id}")
    public void updateAuthor(@RequestBody Authors author,@PathVariable("booksId") Long booksId, @PathVariable("id") Long id){
        author.setBookId(new Books(id, "", ""));
        authorsRepository.save(author);
    }

    @DeleteMapping("/books/{booksId}/authors{id}")
    public void deleteAuthor(@PathVariable("id") Long id){
        authorsRepository.deleteById(id);
    }
}
