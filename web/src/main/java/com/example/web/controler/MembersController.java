package com.example.web.controler;

import com.example.web.model.Members;
import com.example.web.repository.MembersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MembersController {

    @Autowired
    private MembersRepository membersRepository;

    @GetMapping("/members")
    public List<Members> getAllMembers(){ return membersRepository.findAll();
    }

    @GetMapping("/members/{id}")
    public Optional<Members> getMember(@PathVariable("id") Long id){
        return membersRepository.findById(id);
    }

    @PostMapping("/members")
    public void addMember(@RequestBody Members member){ membersRepository.save(member);
    }

    @PutMapping("/members/{id}")
    public void updateMember(@RequestBody Members member, @PathVariable("id") Long id){
        membersRepository.save(member);

    }

    @DeleteMapping("/members/{id}")
    public void deleteMember(@PathVariable("id") Long id){
        membersRepository.deleteById(id);
    }
}
