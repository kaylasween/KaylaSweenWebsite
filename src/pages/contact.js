import React from 'react'
import Layout from '../components/layout'

import Card from 'react-bootstrap/card'
import Col from 'react-bootstrap/col'
import Container from 'react-bootstrap/container'
import Form from 'react-bootstrap/form'
import Row from 'react-bootstrap/row'

const ContactPage = () => (
  <Layout>
    <h1>Contact</h1>
    <Form>
      <Card>
        <Card.Header>
          Contact
        </Card.Header>
        <Card.Body>
          <Container>
            <Form.Group as={Row}>
              <Form.Label column for="name" lg={3}>Name: </Form.Label>
              <Col lg={9}>
                <Form.Control id="name" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column for="email" lg={3}>Email: </Form.Label>
              <Col lg={9}>
                <Form.Control type="email" id="email" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column for="phoneNo" lg={3}>Phone Number: </Form.Label>
              <Col lg={6}>
                <Form.Control type="tel" id="phoneNo" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column for="message" lg={3}>Message: </Form.Label>
              <Col lg={9}>
                <textarea id="message" class="form-control"></textarea>
              </Col>
            </Form.Group>
          </Container>
        </Card.Body>
      </Card>
    </Form>
  </Layout>
)

export default ContactPage
