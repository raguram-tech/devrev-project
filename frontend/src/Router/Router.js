import { Route, Routes } from "react-router-dom";
import NavigationBar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Library from "../Library/Library";
import AddBook from "../components/AddBook";
import About from "../About/About";
import Contact from "../Contact/Contact";
import BookDetails from "../components/BookDetails";

const Router = () => {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/library" element={<Library />} />
        <Route path="/library/:bookId" element={<BookDetails />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Router;
