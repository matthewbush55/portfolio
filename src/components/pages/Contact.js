import React from "react";
import { Form } from "react-bootstrap";

export default function Contact() {
  return (
    <div className="container p-5">
      <h1>Contact</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Control type="email" placeholder="Your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Control as="textarea" rows={3} placeholder="Type your message here..." />
        </Form.Group>
      </Form>
    </div>
  );
}
