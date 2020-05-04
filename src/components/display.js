import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { deleteTask } from '../redux/actions';
import { editTask } from '../redux/actions';
import {connect} from 'react-redux';
//import './Styling.css'; 

class Display extends Component{

handleChange(){
console.log("hiiiiiiii");
   
}
   render(){
      
   return(<div className="display">
        <p className="Task">{this.props.task.mytask}</p>
        <p className="Task">{this.props.task.mydate}</p>
       
     <Button className="btn1"  size="small" startIcon={<EditIcon />} onClick={()=>{this.props.dispatch(editTask(this.props.task.id))}}></Button>
     <Button className="btn2"  size="small" startIcon={<DeleteIcon />} onClick={()=>this.props.dispatch(deleteTask(this.props.task.id))} ></Button>
   


    </div>)}
}

export default connect()(Display);