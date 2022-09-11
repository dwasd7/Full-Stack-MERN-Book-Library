import React from 'react';
import BookUpdate from "./components/BookUpdate";
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Books from './components/Books';
import AddBook from './components/AddBook';


function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/books/:id" element={<BookUpdate />} exact />
        </Routes>
      </main>

    </React.Fragment>
  );
}

export default App;
