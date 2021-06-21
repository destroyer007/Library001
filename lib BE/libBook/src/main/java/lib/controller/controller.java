package lib.controller;

import lib.entity.BookData;
import lib.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/library/book")
public class controller {
    @Autowired
    BookService libraryService;

    @GetMapping("/books")
    public List<BookData> getAllBooks(){
        return libraryService.getAllBooks();
    }

    @GetMapping("/books/{id}")
    public Optional<BookData> getBook(@PathVariable Integer id){
        return libraryService.getBook(id);
    }

    @PostMapping("/books")
    public BookData addBook(@RequestBody BookData bookData){
        return libraryService.addBook(bookData);
    }


}
