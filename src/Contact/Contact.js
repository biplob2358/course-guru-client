import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import email from '../Asset/emails.gif'

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        toast.success('Message sent')
        e.target.reset();




    };
    return (
        <div>
            <Container className='border mb-4 py-3 ' >
                <h1 className='text-center'>Contact with us</h1>
                <Form onSubmit={sendEmail} >
                    <Form.Group controlId="form.Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" required />
                    </Form.Group>
                    <Form.Group controlId="form.Email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" required />
                    </Form.Group>
                    <Form.Group controlId="form.Textarea">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control as="textarea" rows={3} required />
                        <div className="text-center">
                            <input
                                className="btn mt-2 btn-outline btn-primary bg-slate-100 w-1/2 mx-auto"
                                type="submit"
                                value="send message"
                            />
                        </div>
                    </Form.Group>

                </Form>
            </Container>

        </div>
    );
};

export default Contact;