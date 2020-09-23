import React, { Component } from 'react';
import Axios from 'axios';
import './task.css';
import swal from 'sweetalert';


export default class Task extends Component{
    constructor(props){
        super(props);
        this.state={
            taskChange:undefined,
            taskShow:undefined,
            toggle:false,
            changename:undefined,
            questions:[]
        }
       
    }
    
   
    taskChange=(e)=>{
       
            this.setState({taskChange:e.target.value,taskShow:undefined})
     }
    showTask=()=>{
       
        if(document.getElementById("name1").value !== ''){
            Axios.get('http://localhost:4000/tasks/'+this.state.taskChange).then((res)=>{
                console.log(res);
                this.setState({taskShow:res.data.task,valuename:undefined,changename:this.props.nameToSend});
               if(this.props.idData){
                Axios.delete('http://localhost:4000/lists/'+this.props.idData).then((res)=>{
                    console.log("Thank you for participate")
                    Axios.get('http://localhost:4000/newArr').then((res2)=>{
                        console.log('new question data', res2.data);

                        let arr=[];
                        res2.data.map((data)=>{
                            arr.push(data.questName);
                        })

                        this.setState({questions:arr})
                    })
                })
               }
               
                
            });
        }else{
            this.setState({taskShow:[]});  
        }
       

        document.getElementById("name1").value='';
        document.getElementById("name1").disabled=true
       

    }

    checkedData=(val)=>{
        // swal({
        //     title: 'Are you sure?',
        //     text: "Lock kar diya jaye !",
        //     type: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, confirm  it!'
        //   }).then(function() {
        //     swal(
        //       'Confirmed!',
        //       'Your choice has been confirmed.',
        //       'success'
        //     );
        //   })
          swal({
            title: "Are you sure?",
            text: "Lock kar diya jaye !!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Your choice has been confirmed.!", {
                icon: "success",
              }
              
              );

              Axios.post('http://localhost:4000/newArr',{
                questName:val
            }).then((res)=>{
                console.log("succesfully inserted in new Array")
            })
            } else {
              swal("Please select another one!");
            }
          });
    }
    render(){
       
        return<>
                <h3>Tasks</h3>
               
                <input id="name1" type="text" className="form-group"  onChange={this.taskChange} /> 
                <button className="btn btn-info" onClick={this.showTask}>Show Task</button>
                <h5>{
                   ( (this.props.nameToSend == this.state.changename) && this.props.nameToSend &&  this.state.taskShow )  && <div style={{display:'flex'}}>
                       <div className="name">{this.props.nameToSend}-</div> 
                       <div className="taskname">{this.state.taskShow.map((data,i)=>{
                           if(this.state.questions.includes(data)){
                                return <del><div style={{paddingBottom:'20px'}}><input type="radio" className="radio-button" name="ques" disabled/> {data} </div></del>
                           }else{
                            return <div style={{paddingBottom:'20px'}}><input type="radio" name="ques" className="radio-button" onClick={this.checkedData.bind(this,data)}/> {data} </div>
                           }
                           
                       })}</div>
                    </div>
                }
                </h5> 
        </>
    }
}