import React from 'react'
import PropTypes from 'prop-types'

import Card from 'react-bootstrap/Card'

import placeholder from '../images/gatsby-astronaut.png'

const Project = () => (
    <Card className="bg-dark">
        <Card.Img src={placeholder} alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>Project title</Card.Title>
            <Card.Text>
                This is where the project decription will go.
            </Card.Text>
            <Card.Text>approximate date</Card.Text>
        </Card.ImgOverlay>
    </Card>
)

export default Project