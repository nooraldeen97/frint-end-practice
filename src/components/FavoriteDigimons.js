import axios from 'axios';
import React, { Component } from 'react'
import AddedCard from './addedCard';
import ModalForm from './ModalForm';





class FavoriteDigimons extends Component {
constructor(props){
    super(props)
    this.state={
        favDataArr:[],
        showFavData:false,
        showModal:false,
        index:0,
        name:'',
        img:'',
        level:''
    }
}

    componentDidMount=async()=>{
        const favArr = await axios.get(`${process.env.REACT_APP_URL}/getFav`)
        console.log(favArr.data)

        this.setState({
            favDataArr:favArr.data,
            showFavData:true
        })
    }

    deleteFunc=async(idx)=>{
        const id=this.state.favDataArr[idx]._id;
        // console.log(this.state.favDataArr[idx]._id)
        const afterDeleteArr = await axios.delete(`${process.env.REACT_APP_URL}/deleteDiagmon/${id}`)
        // console.log(afterDeleteArr.data)
        this.setState({
            favDataArr:afterDeleteArr.data,
        })
    }

    handleClose=()=>{
        this.setState({
            showModal:false
        })
    }

    showUpdateModal=(idx)=>{
        this.setState({
            showModal:true,
            index:idx,
            name:this.state.favDataArr[idx].name,
            img:this.state.favDataArr[idx].img,
            level:this.state.favDataArr[idx].level,

        })
    }

    formHandler=async(event)=>{
        event.preventDefault();
        const id=this.state.favDataArr[this.state.index]._id
        const obj ={
            name : event.target.name.value,
            img : event.target.img.value,
            level : event.target.level.value,
        }
        console.log(obj)
        const myUpdatedArr= await axios.put(`${process.env.REACT_APP_URL}/updatePoke/${id}`,obj)

        this.setState({
            favDataArr:myUpdatedArr.data,
             showModal:false,

        })
    }


    render() {
        return (
            <>
           <AddedCard
           favDataArr={this.state.favDataArr}
           showFavData={this.state.showFavData}
           deleteFunc={this.deleteFunc}
           showUpdateModal={this.showUpdateModal}
           />
           <ModalForm
                showModal={this.state.showModal}
                handleClose={this.handleClose}
                name={this.state.name}
                img={this.state.img}
                level={this.state.level}
                formHandler={this.formHandler}

           />
           </>
        )
    }
}

export default FavoriteDigimons;
