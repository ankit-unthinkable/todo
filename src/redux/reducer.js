import {ADD_TASK,DELETE_TASK,EDIT_TASK,UPDATE,SEARCH} from './actions';

const reducer=(state=[],action)=>{


    switch(action.type){
    case ADD_TASK: 
              return state.concat([action.data]);
    case DELETE_TASK: 
              return state.filter((task)=>task.id!==action.id);
    case EDIT_TASK:
             return state.map((task)=>task.id===action.id?{...task,isEdit:!task.isEdit}:task);
    case UPDATE:
            return state.map((task)=>{
                  if(task.id === action.id) {
                    return {
                       ...task,
                       mytask:action.data.newmytask,
                       
                       isEdit: !task.isEdit
                    }
                  } else return task;
                })
    case SEARCH:
         return state.filter((task)=>{
             if(task.mydate===action.id){
               return task;
                }
           
             }
         )
          
    default: return state;

    }

}

export default reducer;