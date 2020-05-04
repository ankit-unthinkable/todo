import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import {connect} from 'react-redux';
import { useDispatch} from 'react-redux'
import {update} from '../redux/actions.js'

const Edit=(props)=>{

let [mystate,setState]=useState(props.task.mytask);
const dispatch=useDispatch();
  
const handleEditTask=(e)=>{
  e.preventDefault();
  setState(e.target.value);
  console.log(mystate);
}
const handleEdit=(e)=>{
  e.preventDefault();
 const data={
  
   newmytask:mystate,
   id:props.task.id,
   isEdit:false

}

console.log(data);

dispatch(update(props.task.id,data.newmytask));


}


return(
    <div>
      <form onSubmit={handleEdit}>
    <input  defaultValue={props.task.mytask} onChange={handleEditTask} />
    <Button type="submit" size="small" startIcon={<SaveIcon />} >Update</Button>
    </form>
  </div>
    )
}



export default connect()(Edit);

/*


import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';


class Edit extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newmytask = this.getTitle.value;

  const data = {
    newmytask
  
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.task.id, data: data })
}
render() {
return (
<div>
  <form onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getTitle = input}
    defaultValue={this.props.task.mytask} placeholder="sdfghjk....." /><br /><br />
    
    <Button  type="submit" size="small" startIcon={<SaveIcon />} >Save</Button>
  </form>
</div>
);
}
}
export default connect()(Edit);

*/