import React,{Component} from 'react';
import {connect} from 'react-redux';
import Edit from './edit';
import './Styling.css';
import Display from './display';
class Show extends Component{

render(){

  
return(
  <div>
    
  { console.log(this.props.tasks)}
  <h3 >Your have added:</h3>
  {this.props.tasks.map((task) => (
                    <div key={task.id}>
                        {task.isEdit ? <Edit task={task} key={task.id} /> :
                            <Display key={task.id} task={task} />}
                               
                    </div>
                ))}

   
  </div>);
     }}
                   

                                  


               





const mapStateToProps=(state)=>{
    return{
      tasks:state
    }
  }

export default connect(mapStateToProps)(Show);




/** <div>
    
    { console.log(this.props.tasks)}
    <h3>Your tasks are</h3>
     {this.props.tasks.map((task)=><Display key={task.id} task={task}/> )}
 
     
    </div> */