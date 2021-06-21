package lib.serviceImpl;

import lib.entity.BookData;
import lib.repository.BookRepository;
import lib.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService {
    @Autowired
    private BookRepository bookRepository;

    @Override
    public List<BookData> getAllBooks() {
        return bookRepository.findAll();
    }

    @Override
    public Optional<BookData> getBook(Integer id) {
        return bookRepository.findById(id);
    }

    @Override
    public BookData addBook(BookData bookData) {
        return bookRepository.save(bookData);
    }
}
