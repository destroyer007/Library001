package com.lib.member.serviceImpl;

import com.lib.member.model.Member;
import com.lib.member.repository.MemberRepository;
import com.lib.member.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
public class MemberServiceImpl implements MemberService {
    @Autowired
    private MemberRepository memberRepository;

    @Override
    public List<Member> getAll() {
        return memberRepository.findAll();
    }

    @Override
    public Optional<Member> getById(int id) {
        return memberRepository.findById(id);
    }

    @Override
    public List<Member> getByName(String name) {
        return memberRepository.findByName(name);
    }

    @Override
    public Member addMember(Member member) {
        return memberRepository.save(member);
    }
}
