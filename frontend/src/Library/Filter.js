import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Filter = ({
  filterTitle,
  filterAuthor,
  filterSubject,
  filterPublishDate,
  onFilterChange,
}) => {
  const [isFilterOn, setIsFilterOn] = useState(false);
  return (
    <div>
      <Button variant="primary" onClick={() => setIsFilterOn(!isFilterOn)}>
        <FontAwesomeIcon icon={faFilter} className="mr-2" />
      </Button>
      {isFilterOn && (
        <div>
          <Form className="mt-2">
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Control
                type="text"
                placeholder="Enter Title"
                name="title"
                value={filterTitle}
                onChange={onFilterChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAuthor">
              <Form.Control
                type="text"
                placeholder="Enter Author"
                name="author"
                value={filterAuthor}
                onChange={onFilterChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Control
                type="text"
                placeholder="Enter Subject"
                name="subject"
                value={filterSubject}
                onChange={onFilterChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPublishDate">
              <Form.Control
                type="text"
                placeholder="Enter Publish Date"
                name="publishDate"
                value={filterPublishDate}
                onChange={onFilterChange}
              />
            </Form.Group>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Filter;
