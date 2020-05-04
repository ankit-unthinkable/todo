import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import {connect} from 'react-redux';
import { useDispatch} from 'react-redux'
import {addTask} from '../redux/actions.js'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Styling.css'
import Show from './showTasks.js'

const Task=(props)=>{

let [mystate,setState]=useState(null);
let [date,setDate]=useState();
const dispatch=useDispatch();  


const handleAddTask=(e)=>{
  e.preventDefault();
  setState(e.target.value);

}
const handleAdd=(e)=>{
  e.preventDefault();
 const data={
  id:new Date(),

   mytask:mystate,

   isEdit:false,
  
   mydate:date


}

dispatch(addTask(data));
e.target.value='';

}


const handleDate=(e)=>{

  setDate(e.target.value);
}


return(
    <div className="margin">
      
      <form  noValidate>
      <TextField onChange={handleDate}
        id="date"
        type="date"
        defaultValue="2020-05-04"
       
        InputLabelProps={{
          shrink: true,
        }}
      />
     
    </form>
      <form onSubmit={handleAdd}>
    <input placeholder="Enter your task here..." onChange={handleAddTask} />
    <Button  type="submit" size="small" startIcon={<SaveIcon />} >Save</Button>
    </form>
    
    <hr/>
    <Show/>
  </div>
    )
}



export default connect()(Task);

