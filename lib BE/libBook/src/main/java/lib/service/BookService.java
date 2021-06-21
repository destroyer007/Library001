package lib.service;


import lib.entity.BookData;

import java.util.List;
import java.util.Optional;

public interface BookService {
    List<BookData> getAllBooks();

    Optional<BookData> getBook(Integer id);

    BookData addBook(BookData bookData);
}
