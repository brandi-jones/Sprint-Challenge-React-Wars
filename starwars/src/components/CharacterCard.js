import React from "react";
import {Card, CardHeader, CardBody, CardSubtitle, Col} from 'reactstrap';

const CharacterCard = (props) => {
    console.log("props in Card.js", props);

    return (
        <Col>
            <Card body className="text-center" inverse style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderColor: '#255' }}>
                <CardHeader style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>{props.name}</CardHeader>
                    <CardBody>
                        <CardSubtitle>Gender: {props.gender}</CardSubtitle>
                        <CardSubtitle>Birth Year: {props.birthYear}</CardSubtitle>
                    </CardBody>
            </Card>
        </Col>
    );
};

export default CharacterCard;