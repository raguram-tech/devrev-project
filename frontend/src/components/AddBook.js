import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [subject, setSubject] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const book = { title, author, subject, publishDate };
    const response = await fetch("/api/books", {
      method: "POST",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response) {
      setError(json.error);
    }
    if (response.ok) {
      setAuthor("");
      setSubject("");
      setPublishDate("");
      setTitle("");
      setError(null);
      console.log(json);
    }
  };
  return (
    <div className="d-flex justify-content-center p-3">
      <Form className="mt-2" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Control
            type="text"
            placeholder="Enter Title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAuthor">
          <Form.Control
            type="text"
            placeholder="Enter Author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSubject">
          <Form.Control
            type="text"
            placeholder="Enter Subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPublishDate">
          <Form.Control
            type="text"
            placeholder="Enter Publish Year"
            name="publishDate"
            value={publishDate}
            onChange={(e) => setPublishDate(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Book
        </Button>
        {error && <div>{error}</div>}
      </Form>
    </div>
  );
};

export default AddBook;
