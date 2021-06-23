// import React, { Component } from 'react'
// import { Form, Button} from 'react-bootstrap'
// import NewHorned from './NewHorned';
// import Data from "./data.json"


// export class Filter extends Component {
//     constructor(){
//         super();    
//         this.state={
//             show:false
//         }
//     }

//     numberOfhorns=(e)=>{
//         this.setState({
//             horns:e.target.value
//         })
//     }

//     submitHandler=(e)=>{
//         e.preventDefault()
//         this.setState({
//             show:true
            
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <Form onSubmit={(e)=>{this.submitHandler(e)}}>
//   <Form.Group controlId="exampleForm.SelectCustom">
//     <Form.Label>Select number of horns</Form.Label>
//     <Form.Control as="select" custom onChange={(e)=>this.numberOfhorns(e)}>
//       <option value={1}>1</option>
//       <option value={2}>2</option>
//       <option value={3}>3</option>
//       <option value={100}>100</option>
//     </Form.Control>
//     </Form.Group>

//     <Button variant="danger" type="submit">Filter</Button>
//                 </Form>

               

//                 {
//                         this.state.show && 
//                         <NewHorned
//                         title={this.props.title}
//                         image_url={this.props.image_url}
//                         description={this.props.description}
//                         vote={this.props.vote}
//                         hrons={this.state.horns}
//                         /> 
//                     }


//             </div>
//         )
//     }
// }

// export default Filter
