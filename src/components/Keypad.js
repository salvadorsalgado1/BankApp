import React from 'react';
import {

    Container, Row, Col, Button, ButtonGroup,
} from "react-bootstrap";


const KeyPadSize = {
    color : "secondary",
    
}


function KeyPad()
{
    return(
        <div className = "KeyPad">
            <Container  color = "secondary"style = {KeyPadSize}>
            <Row color = "secondary">
                <Col color = "secondary">
                <ButtonGroup olor = "secondary" size = "lg">
                    <Button style = {KeyPadSize}color = "secondary">1</Button>
                    <Button BackgroundColor = "secondary">2</Button>
                    <Button color = "secondary">3</Button>
                </ButtonGroup>
                </Col>
            </Row>

            <Row>
                <Col>
                <ButtonGroup size = "lg">
        <Button color = "secondary">4</Button>
            <Button color = "secondary">5</Button>
            <Button color = "secondary">6</Button>
        </ButtonGroup>
                </Col>
            </Row>

<Row>
    <Col>
    <ButtonGroup color = "secondary"size = "lg">
            <Button color="secondary">7</Button>
            <Button color = "secondary">8</Button>
            <Button color = "secondary">9</Button>
        </ButtonGroup>

    </Col>
</Row>
        </Container>
        </div>
    );
}

export default KeyPad



