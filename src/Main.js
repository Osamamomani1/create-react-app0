import React, { Component } from 'react';
import HornedBeast from "./HornedBeast";
import { CardColumns } from 'react-bootstrap';
import Data from "./data.json"

export class Main extends Component {
    render() {

          
        
        return (
            
            <div>
                <CardColumns>
              {
                Data.map(value => {
                  return <HornedBeast
                    title={value.title}
                    image_url={value.image_url}
                    description={value.description}
                    
                     />
      
                })
              }
              </CardColumns>
            </div>
        )
    }
}

export default Main
 