import React, { Component } from 'react';
import { Modal,Button } from 'react-bootstrap';







export class SelectedBeast extends Component {
    constructor(props){
        super(props);
        this.state={
            flag: false
        }
    
        
      }

      handleShow= ()=>{

        this.setState({
            flag: !this.state.flag
        })
        //   if (this.state.flag) {
        //     this.setState({
        //         flag: false
        //     })  
        //   } else {
        //     this.setState({
        //         flag: true
        //     })  
        //   }
         
      }

render (){

    return (
        <>
          <Button variant="primary" onClick={this.handleShow}>
            Launch demo modal
          </Button>
    
          <Modal show={this.state.flag} onHide={this.handleShow}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body><img src={this.props.image_url} width='500px'/>
            <p>{this.props.description}</p> 
            <span><i class="far fa-heart">{this.props.vote}</i></span>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleShow}>
                Close
              </Button>
              {/* <Button variant="primary" onClick={this.handleShow}>
                Save Changes
              </Button> */}
            </Modal.Footer>
          </Modal>
        </>
      );

}


    
}