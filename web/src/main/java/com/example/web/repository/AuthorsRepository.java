package com.example.web.repository;

import com.example.web.model.Authors;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuthorsRepository extends JpaRepository<Authors, Long> {
    public List<Authors> findByBookId(long bookId);


}
