package com.example.web.controler;

import com.example.web.model.Types;
import com.example.web.repository.TypesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class TypesController {

    @Autowired
    private TypesRepository typesRepository;

    @GetMapping("/types")
    public List<Types> getAllTypes(){
        return typesRepository.findAll();
    }

    @GetMapping("/types/{type_id}")
    public Optional<Types> getType(@PathVariable("type_id") Long type_id){
        return typesRepository.findById(type_id);
    }

    @PostMapping("/types")
    public void addType(@RequestBody Types type){
        typesRepository.save(type);
    }

    @PutMapping("/types/{type_id}")
    public void updateType(@RequestBody Types type, @PathVariable("type_id") Long type_id){
        typesRepository.save(type);
    }

    @DeleteMapping("/types/{type_id}")
    public void deleteType(@PathVariable("type_id") Long type_id){
        typesRepository.deleteById(type_id);
    }
}