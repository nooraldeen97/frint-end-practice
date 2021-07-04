import React, { Component } from 'react';
import {Card,Button,CardColumns} from 'react-bootstrap/';

class MainCard extends Component {
    render() {
        return (
            <CardColumns>
           {this.props.showData&& this.props.MainDiaArr.map((item,index)=>{
                    return(
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                  {item.level}
                                </Card.Text>
                                <Button variant="primary" onClick={()=>{this.props.addToMyFav(item)}}>Add to my Faverite</Button>
                            </Card.Body>
                        </Card>

                    )
           })}
        </CardColumns>
        )
    }
}

export default MainCard
