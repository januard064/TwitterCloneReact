import React,{useState} from "react";
import './CreateTweet.css';
import { BiImageAlt } from 'react-icons/bi'
import { AiOutlineCalendar } from 'react-icons/ai'
import { RiBarChartHorizontalFill, RiFileGifLine } from 'react-icons/ri'
import { VscSmiley } from 'react-icons/vsc'





const CreateTweet = (props) => {

     const [warning, setWarning]  = useState('');

     const initialFormStates = {id: null, username: '', tweet: '', time: '', comment: null, retweet: null, love: null}
     const [tweets, setTweets] = useState(initialFormStates)

     const handleInputChange = (e) => {
          const { name, value } = e.target
          console.log(value)
          setTweets({ ...tweets, [name]: value})
          setWarning(value)
          console.log(tweets)
     }


     return(
          <form
               onSubmit = {e => {
                    e.preventDefault()
                    if(!tweets.tweet)
                    return
                    props.postTweet(tweets)
                    setTweets(initialFormStates)
                    setWarning('')
               }}
          >
          <div className='postTweet'>
               <div className="top">
                    <div className="profile">
                         <img src={props.imgSource} alt="profile Image" />
                    </div>
                    <div className="inputs">
			          <textarea type="text" name="tweet" className="control" placeholder="What's Happening" value={tweets.tweet} onChange={handleInputChange} maxLength="240" />
                         {
                             warning && <p className="warning">{240-warning.length} Character Left</p>
                         }
                    </div>
               </div>
               <div className="bottom">
                    <div className="icon">
                         <BiImageAlt className='ic' />
                         <RiFileGifLine className='ic' />
                         <RiBarChartHorizontalFill className='ic' />
                         <VscSmiley className='ic' />
                         <AiOutlineCalendar className='ic' />
                    </div>
                    {
                         warning === '' ? (
                             <div className="btn_disabled"> <button disabled>Tweet</button> </div>
                         ) :  <div className="btn"> <button>Tweet</button></div>
                    }
                   
               </div>
          </div>
          </form>
     )
}

export default CreateTweet