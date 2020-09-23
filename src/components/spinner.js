import React,{Component} from 'react';
import './spinner.css';

export default class Spin extends Component{

    spinRoller=()=>{
        var x=1024;
        var y=9999;
        var deg= Math.floor(Math.random()* (x-y)) + y;
        document.getElementById('box').style.transform= "rotate("+deg+"deg)";
        var element=document.getElementById('mainbox');
        element.classList.remove('animate');
        setTimeout(function(){
            element.classList.add('animate');
        },3000);
        document.getElementById("name1").disabled=false
        this.props.setName();
    }
    render(){
        return<>
                <div id="mainbox" className="mainbox">
                    <div id="box" className="box">
                        <div className="box1">
                            <span className="span1"><b>1</b></span>
                            <span className="span2"><b>2</b></span>
                            <span className="span3"><b>3</b></span>
                            <span className="span4"><b>4</b></span>
                        </div>
                        <div className="box2">
                            <span className="span1"><b>5</b></span>
                            <span className="span2"><b>6</b></span>
                            <span className="span3"><b>7</b></span>
                            <span className="span4"><b>8</b></span>
                        </div>
                    </div>
                    
                    <button className="spin" onClick={this.spinRoller}>SPIN</button>
                </div>
                <div className="arrow">{'<'}</div>
            </>
    }
}