package com.lib.member.model;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name="Member")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id")
    private Integer id;

    @Column(name="Scope")
    private String scope;

    @Column(name="Name")
    private String name;

    @Column(name="Age")
    private String age;

    @Column(name="Gender")
    private String gender;

    @Column(name="MobileNumber")
    private String mobileNumber;

    @Column(name="EmailId")
    private String emailId;

    @Column(name="DateOfJoininig")
    private String dateOfJoininig;
}
