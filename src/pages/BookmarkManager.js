
import React, { useState, useEffect } from 'react';
import { Button, Input, Modal, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";



const getDatafromLS =()=>{
    const data = localStorage.getItem('books');
    if(data){
        return JSON.parse(data);
    }
    else{
        return []
    }
}

export default function BookmarkManager() {

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true); 

const[detailsshow, setDetailsshow] = useState(false);
const handleDetailsShow = () => setDetailsshow(true); 



const[books, setBooks] = useState(getDatafromLS());


const [title, setTitle] = useState("");
const [url, setUrl] = useState("");
const [category, setCategory] = useState("");


    const onBookmarkFormSubmit = (e) => {
    e.preventDefault();
    handleClose();

    const book = {
        title,
        url,
        category
    }
    setBooks([...books, book]);
    setTitle('');
    setUrl('');
    setCategory('');
    
  };



  useEffect(()=>{
    localStorage.setItem('books', JSON.stringify(books))


  },[books])

    return (
        <div style={{ display: 'flex', alignContent:'center', justifyContent: 'space-around', padding: 50 }}>
            <div className="addbook-mark">
                <div style={{ display: 'flex'}}>
                    <p className="introduce-text" style={{ marginRight: 10}}>Bookmark Manager</p>
                    <Button variant="outline-secondary" onClick={handleShow} >Add BookMark</Button>
                </div>
                <br />
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Add Bookmark</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <>
                    {/* <BookmarkForm/> */}
                    <Form onSubmit={onBookmarkFormSubmit}>
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
                                <Form.Select  onChange={(e) => setCategory(e.target.value)}>
                                <option>Select Category</option>
                                <option value="Category A">Category A</option>
                                <option value="Category B">Category B</option>
                                </Form.Select>
                                <Button variant="outline-primary">+</Button>
                                        
                            </Form.Group>
                            
                            <br/>
                            <Button variant="outline-danger" style={{ marginRight: 10}} onClick={handleClose}>
                                    Cancel
                            </Button>
                            <Button variant="outline-primary" type="submit">
                                    Save
                            </Button>
                    </Form>
                    </>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>Close Modal</Button>
                    </Modal.Footer>
                </Modal>
             

              <div className='view-container'>
                { books.length > 0 && 
                  <div className="categoryAreaA">
                  {/* <Category books={books}/> */}
                 { books.map(book => (
                    <div>
                        <p>{book.category}</p>
                        <div style={{display: 'flex', border: '2px solid black', width: "300px", justifyContent: 'space-around', padding: '20px'
                        }}>
                        <p>{book.title}</p>
                        <Button variant="outline-secondary" onClick={handleDetailsShow}> Details</Button>
                        </div>
                        <br />
                    </div>
                ))}
                        
                    </div>
                }
                    

                {/* <div className="categoryAreaB">
                    <p>Category B</p>
                    <div style={{display: 'flex', border: '2px solid black', width: "300px", justifyContent: 'space-around', padding: '20px'
                 }}>
                        <p>Javascript Tutorial</p>
                        <Button variant="secondary"> Details</Button>
                    </div>
                </div> */}
              </div>

                <br />

                 
            </div>
            { detailsshow && 
                <div className="details" style={{border: '2px solid black', width: 300,  padding: 20, marginTop: 100, 
                 }}>
                { books.map(book => (
                    <div>
                        <p>Title: {book.title}</p>
                        <p>Url: {book.url}</p>
                        <p>Category: {book.category}</p>
                    </div>
                ))}
            </div>  
            } 
        </div>

    );
}