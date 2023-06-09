import React, { Component } from 'react'
import { Card,ListGroup } from 'react-bootstrap'

export default class Newscard extends Component {
  render() {
    const{title,discription,image,time,newsurl,author,source}=this.props
    return (
      <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title.slice(0,55)}...</Card.Title>
        <Card.Text>
         {discription.slice(0,60)}...
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{author}</ListGroup.Item>
        <ListGroup.Item>{source}</ListGroup.Item>
        <ListGroup.Item>{ new Date(time).toLocaleString()}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href={newsurl} target='_blank'>Read More &gt;&gt;&gt;</Card.Link>
      </Card.Body>
    </Card>
      </div>
    )
  }
}
