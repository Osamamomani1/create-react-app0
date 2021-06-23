import React, { Component } from 'react';
import HornedBeast from "./HornedBeast";
import { CardColumns } from 'react-bootstrap';
import Data from "./data.json"
import { Form, Button} from 'react-bootstrap'


export class Main extends Component {

  constructor(){
    super();    
    this.state={
        show:false
    }
}

numberOfhorns=(e)=>{
    this.setState({
        horns:e.target.value
    })
}

submitHandler=(e)=>{
    e.preventDefault()
    this.setState({
        show:true
        
    })
}

backtHandler=(e)=>{
  e.preventDefault()
  this.setState({
      show:false
      
  })
}

    render() {

        return (
            
            <div>
              {/* <Filter
              
              /> */}

<Form onSubmit={(e)=>{this.submitHandler(e)}}>
  <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Label>Select number of horns</Form.Label>
    <Form.Control as="select" custom onChange={(e)=>this.numberOfhorns(e)}>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={100}>100</option>
    </Form.Control>
    </Form.Group>

    <Button variant="click" type="submit">Filter</Button> 
    <Button variant="click" type="submit" onClick={(e)=>{this.backtHandler(e)}}>Show All</Button>
                </Form>

               

                {
                        this.state.show && 
                        <CardColumns>
              {
                
                Data
                .filter(value =>{
                  return value.horns==this.state.horns
                })
                .map(value => {
                  return  (<HornedBeast
                    title={value.title}
                    image_url={value.image_url}
                    description={value.description}
                    horns={value.horns}
                     />)
      
                })
              }
              </CardColumns>
                    }

              
                {
                this.state.show===false &&
                <CardColumns>
              {
                
                Data
                .map(value => {
                  return  (<HornedBeast
                    title={value.title}
                    image_url={value.image_url}
                    description={value.description}
                    horns={value.horns}
                     />)
      
                })
              }
              </CardColumns>

            }
            
              
              
  
            </div>
        )
    }
}

export default Main
 