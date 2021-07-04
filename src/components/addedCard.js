import React, { Component } from 'react';
import {Card,Button,CardColumns} from 'react-bootstrap/';

class AddedCard extends Component {
    render() {
        return (
            <CardColumns>
           {this.props.showFavData && this.props.favDataArr.map((item,index)=>{
                    return(
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                  {item.level}
                                </Card.Text>
                                {/* <Button variant="primary" onClick={()=>{this.props.addToMyFav(item)}}>Add to my Faverite</Button> */}
                                <Button variant="primary" onClick={()=>{this.props.showUpdateModal(index)}}>Update</Button>
                                <Button variant="primary"onClick={()=>{this.props.deleteFunc(index)}}>Delete</Button>
                            </Card.Body>
                        </Card>

                    )
           })}
        </CardColumns>
        )
    }
}

export default AddedCard
