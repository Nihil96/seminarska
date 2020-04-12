package com.example.web.controler;

import com.example.web.model.Books;
import com.example.web.repository.BooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BooksController {

    @Autowired
    private BooksRepository booksRepository;

    @GetMapping("/books")
    public List<Books> getAllBooks(){
        return booksRepository.findAll();
    }

    @GetMapping("/books/{book_id}")
    public Optional<Books> getBook(@PathVariable("book_id") Long book_id){
        return booksRepository.findById(book_id);
    }

    @PostMapping("/books")
    public void addBook(@RequestBody Books book){
        booksRepository.save(book);
    }

    @PutMapping("/books/{book_id}")
    public void updateBook(@RequestBody Books book, @PathVariable("book_id") Long book_id){
        booksRepository.save(book);
    }

    @DeleteMapping("/books/{book_id}")
    public void deleteBook(@PathVariable("book_id") Long book_id){
        booksRepository.deleteById(book_id);
    }
}
