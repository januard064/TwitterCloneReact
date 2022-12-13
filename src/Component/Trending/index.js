import React,{useState} from "react";
import { FaSistrix } from 'react-icons/fa'
import './Trending.css';
import TrendingList from "./TrendingList";


const Trending = (props) => {
     const [search, setSearch] = useState('');

     const handleInputChange = (e) => {
          const { name, value } = e.target
          console.log(name)
          setSearch({[name]: value})
     }



    return (
         <div className='trends'>
              <div className="trends__search">
                   <form 
                    onSubmit = {e => {
                         e.preventDefault()
                         props.search(search)
                    }}
                   >
                   <input type='text' className='trend__control' name='search' id='search' onChange={handleInputChange} placeholder='Search Twitter' />
                   <div className="trend__icon"><button><FaSistrix className='search' /></button></div>
                    </form>
              </div>
              <TrendingList />
         </div>
    )
}

export default Trending
