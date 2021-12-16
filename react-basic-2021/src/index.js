import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// books.js
import { bookList } from "./books";
// Book.js
import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {bookList.map((book) => {
        // const { img, title, author } = book;
        return (
          <div>
            <Book key={book.id} {...book} />
          </div>
        );
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
