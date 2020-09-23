import React, { Component } from 'react';

import Spin from './components/spinner';
import List from './components/list';
import Task from './components/task';
import './App.css';
import swal from 'sweetalert';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      nameSel:undefined,
      namevalue:undefined,
      idVal:undefined
    }
  }
  componentDidMount(){
    document.getElementById("name1").disabled=true
  }
  setName=(name,id)=>{
    //alert(name); ["jayant","abinash","jhkaj"]
    this.setState({nameSel:name,namevalue:undefined,idVal:id})
    swal(
      "Hi " +name + " It's Your turn now, Please go ahead and spin the wheel!"
    )
   
  }
  setNameValue=()=>{
    this.setState({namevalue:this.state.nameSel})
  }
render(){
  

  return (
    <div className="col-sm-12">
        <div className="col-sm-3" ><List sendName={this.setName}/></div>
        <div className="col-sm-6" ><Spin setName={this.setNameValue}/></div>
        <div  className="col-sm-3"><Task nameToSend={this.state.namevalue} idData={this.state.idVal}/></div>
     
    </div>
  );
}
}

export default App;
