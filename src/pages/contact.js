import React from 'react'
import Layout from '../components/layout'

import Card from 'react-bootstrap/card'

const ContactPage = () => (
  <Layout>
    <h1>Contact</h1>
    <form>
      <Card>
        <Card.Header>
          Contact
        </Card.Header>
        <Card.Body>
          <label for="name">Name: </label>
          <input type="text" id="name" class="form-control" />
          <label for="email">Email: </label>
          <input type="email" id="email" class="form-control" />
          <label for="phoneNo">Phone Number: </label>
          <input type="tel" id="phoneNo" class="form-control" />
          <label for="message">Message: </label>
          <textarea id="message" class="form-control"></textarea>
        </Card.Body>
      </Card>
    </form>
  </Layout>
)

export default ContactPage
