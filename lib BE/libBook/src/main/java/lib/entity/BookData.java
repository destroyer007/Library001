package lib.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name="Book")
public class BookData {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id")
    private Integer id;

    @Column(name="title")
    private String title;

    @Column(name="author")
    private String author;

    @Column(name="price")
    private String price;

    @Column(name="DateOfPublish")
    private String Date;

    @Column(name="shelfNo")
    private String shelfNo;

}
