import React, { Component } from 'react';
import axios from 'axios';
import MainCard from './mainCard';






class Main extends Component {
    constructor(props){
        super(props)
        this.state={
            MainDiaArr:[],
            showData:false
        }
    }

    addToMyFav=async(item)=>{
        axios.post(`${process.env.REACT_APP_URL}/addFavDia`,item)
    }




    componentDidMount= async()=>{
        const digArr = await axios.get(`${process.env.REACT_APP_URL}/getDiagmons`)
        // console.log(digArr.data)
        this.setState({
            MainDiaArr:digArr.data,
            showData:true
        })
    }

    render() {
        return (
            <MainCard
            MainDiaArr={this.state.MainDiaArr}
            showData={this.state.showData}
            addToMyFav={this.addToMyFav}
            />
        )
    }
}

export default Main;
