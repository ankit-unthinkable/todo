import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import PostAddIcon from '@material-ui/icons/PostAdd';
import {connect} from 'react-redux';
import { useDispatch} from 'react-redux'
import {addTask} from '../redux/actions.js'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Show from './showTasks'
import './Styling.css'

const Notes=(props)=>{

let [mystate,setState]=useState(null);
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

   isEdit:false

}
{console.log(data.id)}
console.log(data);

dispatch(addTask(data));
e.target.value='';

}


return(
    <div className="margin"> 
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<PostAddIcon />}
       
      >
        Add Your Notes here..
      </Button>
       <br/><br/>
      <form onSubmit={handleAdd}>
    <input required rows="5" cols="28" placeholder="Type note here..." onChange={handleAddTask} />
    <Button  type="submit" size="small" startIcon={<AddIcon />}  >ADD</Button>
    </form>
   <Show/>
  </div>
    )
}



export default connect()(Notes);

