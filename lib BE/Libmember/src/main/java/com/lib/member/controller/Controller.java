package com.lib.member.controller;

import com.lib.member.model.Member;
import com.lib.member.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/library/member")
public class Controller {
    @Autowired
    MemberService service;

    @GetMapping("")
    public List<Member> getAllMembers()
    {
        return service.getAll();
    }


    @GetMapping("/{id}")
    public Optional<Member> getById(@PathVariable int id){
        return service.getById(id);
    }
    @GetMapping("/{name}")
    public List<Member> getByName(@PathVariable String name){
        return service.getByName(name);
    }

    @PostMapping("")
    public Member insertmember(@RequestBody Member member){
        return service.addMember(member);
    }

}
