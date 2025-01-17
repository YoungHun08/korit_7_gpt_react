import React, { useState } from 'react';
import "./style.css";
import BookSearchItems from '../BookSearchItems/BookSearchItems';

function BookSearch({ bookList }) {
    const [ bookTableList, setBookTableList ] = useState([]);

        const [ searchValue, setSearchValue ] = useState({
            select: "bookName",
            text: "",
        });
    
        const searchOptions = [
            {
                id: 1,
                label: "도서명",
                value: "bookName",
            },
            {
                id: 2,
                label: "저자명",
                value: "author",
            },
            {
                id: 3,
                label: "출판사",
                value: "publisher",
            },
        ];
    
        const handleSearchValueOnChange = (e) => {
            setSearchValue({
                ...searchValue,
                [e.target.name]: e.target.value,
            });
        }
    
        const handleSearchButtonOnClick = () => {
    
            if(!searchValue.text.trim()) {
                setBookTableList(bookList);
                return;
            }
    
            console.log(searchValue.select);
            const foundBooks = bookList.filter(book => book[searchValue.select].includes(searchValue.text));
            setBookTableList(foundBooks);
        }

    return (
        <div>
            <h1>도서정보 조회</h1>
                <BookSearchItems bookList={bookList} setBookTableList={setBookTableList} />
                <table className='book-table'>
                    <thead>
                        <tr>
                            <th>도서명</th>
                            <th>저자명</th>
                            <th>출판사</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookTableList.map(book => 
                                <tr>
                                    <td>{book.bookName}</td>
                                    <td>{book.author}</td>
                                    <td>{book.publisher}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
        </div>
    );
}

export default BookSearch;