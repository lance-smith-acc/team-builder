import React from 'react';
import {Card, CardBody, CardTitle, CardText} from 'reactstrap';

const MemberCard = props => {
    return (
        <div>
            <Card>
                <CardTitle tag="h1">{props.name}</CardTitle>
                <CardBody>
                    <CardText>Email: {props.email}</CardText>
                    <CardText>Role: {props.role}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default MemberCard