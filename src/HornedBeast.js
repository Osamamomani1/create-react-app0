import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
export class HornedBeast extends Component {
  constructor(props){
    super(props);
    this.state={
      vote:0
    }
  }
  voteRaise=()=>{
    this.setState({
      vote:this.state.vote +1
    })
  }
    render() {
        return (
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.image_url} onClick={this.voteRaise} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    {this.props.description}
    </Card.Text>
    <span><i class="far fa-heart">{this.state.vote}</i></span>
  </Card.Body>
</Card>
            // <div>
            //   <h2>{this.props.title}</h2> 
            //     <a onClick={this.voteRaise}><img src={this.props.image_url} width='300px'/></a>
            //     <span><i class="far fa-heart">{this.state.vote}</i></span>
            //   <p>{this.props.description}</p>  
            // </div>
        )
    }
}

export default HornedBeast