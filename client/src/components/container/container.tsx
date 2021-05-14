
import * as React from 'react';
import {Container as BootstrapContainer}  from 'react-bootstrap';
import {Row, Col}  from 'react-bootstrap';


import Counter from '../counter/counter';
import HookedCounter from "../counter/hookedCounter";


const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

export default class Container extends React.Component {
  
  render () {
    return (
        <div>
            <BootstrapContainer style={containerStyle} >
            <Row>
              <Col><HookedCounter/></Col>
            </Row>
            </BootstrapContainer>
        </div>
    );
  }
}