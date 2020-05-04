import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import {search} from '../redux/actions.js'
import { useDispatch} from 'react-redux'
import Show from './showTasks.js'

import './Styling.css'

const Search=()=>{

  let [date,setDate]=React.useState();
  const dispatch=useDispatch();  

    const handleDate=(e)=>{
      setDate(e.target.value);
    }
    const handleSearch=()=>{
      dispatch(search(date));
    }


    return(
    
    <div className="margin" >
    
    <h3>Search your Tasks</h3>
  <hr/>
  <p>Select the date:</p>
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
    <Button onClick={handleSearch} size="small" startIcon={<SearchIcon />} ></Button>
    <Show/>
    </div>
    )
    
}
export default Search;