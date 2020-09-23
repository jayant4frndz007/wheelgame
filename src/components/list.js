import React, { Component } from 'react';
import Axios from 'axios';
import './list.css';
import swal from 'sweetalert';


export default class List extends Component{
    constructor(props){
        super(props);
        this.state={
            nameData:undefined,
            namechange:undefined,
            nameArr:[],
            idVal:undefined,

        }
    }
    componentWillMount(){
       // this.fetchName();
    }
    fetchName=()=>{
      let length=undefined;
        Axios.get('http://localhost:4000/lists/').then((res)=>{
            console.log('hello',res.data);
           length=res.data.length
           let randomNumber=Math.ceil(Math.random()*length)

           Axios.get('http://localhost:4000/lists').then((res)=>{
               console.log('hello',res);
               if(res.data.length){
                let getNameArr =res.data[randomNumber-1];
                console.log('getnumber',getNameArr)
                 this.setState({nameData:getNameArr.name,namechange:undefined,idVal:getNameArr.id});
                this.props.sendName(getNameArr.name,getNameArr.id)
               }else{
                swal("Oops!", "No more Players found", "error");
               }
                
           })
        })
        
      }

  
    addName=()=>{
        console.log('comming')
           if(this.state.namechange){
               console.log('comming')
               Axios.post('http://localhost:4000/lists',{
                   name:this.state.namechange

               }).then((res)=>{
                   this.fetchName();
                   this.props.sendName(this.state.namechange)
               })
           }
    }
    render(){
        console.log(this.state.nameData)
        return<>
        <h3></h3>
        {/* <input type="text" className="form-group" value={this.state.namechange} id="name" onChange={this.nameChange}/> <button className="btn btn-success" onClick={this.addName}>Add</button> */}
       {/* <select onChange={this.nameChange}  className="form-control1">
       <option >Select</option>
       {
                    this.state.nameData.map((data,i)=>{
                    return <option value={data.name}>{data.name}</option>
                    })
        }
       </select> */}
       <button onClick={this.fetchName} className="box-suffle">Kholo Pitaara</button>


       <div className="name-style">{this.state.nameData}</div>
      
        
        </>
    }
}


/**
 * 
    {
      "name": "Amol",
      "id": 0
    },
    {
      "name": "Laxmikant",
      "id": 1
    },
    {
      "name": "Sonali",
      "id": 2
    },
    {
      "name": "Pooja",
      "id": 3
    },
    {
      "name": "Jayant",
      "id": 4
    },
    {
      "name": "Avinash",
      "id": 5
    },
    {
      "name": "Neelima",
      "id": 6
    },
    {
      "name": "Anjana",
      "id": 7
    },
    {
      "name": "Bhargav",
      "id": 8
    },
    {
      "name": "Gaurav Singh",
      "id": 9
    },
    {
      "name": "Gaurav Tripathi",
      "id": 10
    },
    {
      "name": "Karan",
      "id": 11
    },
    {
      "name": "Venkata Kiran",
      "id": 12
    },
    {
      "name": "SriKrishna",
      "id": 13
    },
    {
      "name": "Vamshi",
      "id": 14
    },
    {
      "name": "Sayali",
      "id": 15
    }


    -------------------------------------

     {
      "name": "Laxmikant",
      "id": 0
    },
    {
      "name": "Neelima",
      "id": 1
    },
    {
      "name": "Anjana",
      "id": 2
    },
    {
      "name": "Bhargav",
      "id": 3
    },
    {
      "name": "Gaurav Singh",
      "id": 4
    },
    {
      "name": "Gaurav Tripathi",
      "id": 5
    },
    {
      "name": "Karan",
      "id": 6
    },
    {
      "name": "Venkata Kiran",
      "id": 7
    },
    {
      "name": "SriKrishna",
      "id": 8
    },
    {
      "name": "Vamshi",
      "id": 9
    },
    {
      "name": "Sayali",
      "id": 10
    }
 */