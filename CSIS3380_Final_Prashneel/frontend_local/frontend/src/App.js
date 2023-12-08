import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddBook from "./components/addBook";
import BookList from "./components/bookList"


// import Junk from "./components/junk";

export default function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
    {/* <Navbar /> */}

      {/* <div className="container"> */}
        <Route path="/" exact element={<BookList />} />
        <Route path="/create-book" element={<AddBook />} />
      {/* </div> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}
