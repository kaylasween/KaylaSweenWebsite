import React from 'react'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Layout from '../components/Layout'
import Project from '../components/Project'

const ProjectPage = () => (
  <Layout>
    <Container>
      <Row>
        <Col>
          <h1>Projects</h1>
          <p>I'll put some cards in here with screen captures and links if applicable.</p>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <Project />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default ProjectPage
