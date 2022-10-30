
import React, { useState } from 'react';
import { Button, Input, Modal, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";



const BookmarkForm = ({ onSubmit }) => {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [category, setCategory] = useState("");

    
  return (
    <Form onSubmit={onSubmit}>
        <Form.Group controlId="formTitle">
            <Form.Control
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            </Form.Group>
            <br />

            <Form.Group controlId="formUrl">
                <Form.Control
                    type="text"
                    placeholder="URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
            </Form.Group>
                <br />
            <Form.Group controlId="formCategory" style={{ display: 'flex'}}>
                    <Form.Control
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    />
                    <span style={{ border: '1px solid black', padding: '5px' }}>+</span>
                        
            </Form.Group>
                <br/>
                <Button variant="danger" style={{ marginRight: '10px'}}>
                        Cancel
                </Button>
                <Button variant="primary" type="submit">
                        Save
                </Button>
        </Form>
  );
};




export default function BookmarkManager() {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);

const handleShow = () => setShow(true);

const onBookmarkFormSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };
   

    return (
        <div style={{ display: 'flex', alignContent:'center', justifyContent: 'center' }}>
            <div className="addbookmark">
                <div style={{ display: 'flex'}}>
                    <p className="introduceText" style={{ marginRight: '10px'}}>Bookmark Manager</p>
                    <Button variant="primary" onClick={handleShow} >Add BookMark</Button>
                </div>
                <br />
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Add Bookmark</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <>
                    <BookmarkForm onSubmit={onBookmarkFormSubmit} />
                    </>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close Modal</Button>
                    </Modal.Footer>
                </Modal>
             

                <div className="categoryAreaA">
                    <p>Category A</p>
                    <div style={{display: 'flex', border: '2px solid black', width: "300px", justifyContent: 'space-around', padding: '20px'
                 }}>
                        <p>Javascript Tutorial</p>
                        <Button variant="secondary"> Details</Button>
                    </div>
                </div>
                <br />

                <div className="categoryAreaB">
                    <p>Category B</p>
                    <div style={{display: 'flex', border: '2px solid black', width: "300px", justifyContent: 'space-around', padding: '20px'
                 }}>
                        <p>Javascript Tutorial</p>
                        <Button variant="secondary"> Details</Button>
                    </div>
                </div>

                <br />

                 <div className="details" style={{border: '2px solid black', width: "300px",  padding: '20px'
                 }}>
                    <p>Title: </p>
                    <p>URL: </p>
                    <p>Category: </p>
                </div>
            </div>
        </div>

    );
}