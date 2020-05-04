export const addTask=(text)=>{
    return{
        type:"ADD_TASK",
        data:text
    }
}

export const deleteTask=(ids)=>{
    return{
        type:"DELETE_TASK",
        id:ids
    }
}

export const editTask=(ids)=>{
    return{
        type:"EDIT_TASK",
        id:ids
    }
}

export const update=(ids,tsk)=>{
    return{
        type:"UPDATE",
        id:ids,
        data:{newmytask:tsk}
    }
}

export const search=(ids)=>{
    return{
        type:"SEARCH", 
        id:ids
    }
}

export const ADD_TASK="ADD_TASK";
export const DELETE_TASK="DELETE_TASK";
export const EDIT_TASK="EDIT_TASK";
export const UPDATE="UPDATE";
export const SEARCH="SEARCH";




