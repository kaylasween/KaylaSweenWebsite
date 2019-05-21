import React from 'react'
import Layout from '../components/layout'

import Card from 'react-bootstrap/card'
import Col from 'react-bootstrap/col'
import Container from 'react-bootstrap/container'
import Row from 'react-bootstrap/row'

const ContactPage = () => (
  <Layout>
    <h1>Contact</h1>
    <form>
      <Card>
        <Card.Header>
          Contact
        </Card.Header>
        <Card.Body>
          <Container>
            <Row>
              <Col>
                <label for="name">Name: </label>
                <input type="text" id="name" class="form-control" />
              </Col>
            </Row>
            <Row>
              <Col>
                <label for="email">Email: </label>
                <input type="email" id="email" class="form-control" />
              </Col>
            </Row>
            <Row>
              <Col>
                <label for="phoneNo">Phone Number: </label>
                <input type="tel" id="phoneNo" class="form-control" />
              </Col>
            </Row>
            <Row>
              <Col>
                <label for="message">Message: </label>
                <textarea id="message" class="form-control"></textarea>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </form>
  </Layout>
)

export default ContactPage
