package com.lib.member.service;

import com.lib.member.model.Member;

import java.util.List;
import java.util.Optional;

public interface MemberService {
    List<Member> getAll();

    Optional<Member> getById(int id);

    List<Member> getByName(String name);

    Member addMember(Member member);

}
