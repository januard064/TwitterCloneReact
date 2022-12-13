import React,{useState} from "react";
import './TweetList.css';
import { BsChat } from 'react-icons/bs';
import { AiOutlineRetweet,AiOutlineHeart, AiOutlineUpload } from 'react-icons/ai';
import { FiMoreHorizontal, FiEdit2 } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

const TweetComponent = ({tweets, deleteTweet, updateTweet, imgSource, sorting}) => {

    const [tampil, setTampil] = useState(false);
   
    const toggleHandler = () => {
         setTampil(!tampil)
    }

    const setDeleteTweet = (id) => {
        deleteTweet(id)
        setTampil(!tampil)
    }

    const setUpdateTweet = (tweets) => {
        updateTweet(tweets)
        setTampil(!tampil)
    }
 

    return(
        <>
         <div className="top" key={tweets.id}>
            <div className="profile">
                <img src={imgSource} alt="profile Image" />
            </div>             
            {
                tampil && <div className="crud">
                    <table>
                        <tr><button onClick={() => setDeleteTweet(tweets.id)} ><span><RiDeleteBin5Line className="icon"/></span> Delete</button></tr>
                        <tr><button onClick={() => setUpdateTweet(tweets)}><span><FiEdit2 className="icon" /></span> Edit</button></tr>
                    </table>
                </div>
            }
            <div className="content">
           
                <div className="head">
                    <h4>{tweets.name}<span className="username">@{tweets.username} - {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(tweets.time))) }</span> <FiMoreHorizontal className="more" onClick={toggleHandler} />
                  
                    </h4>
                </div>
                <div className="body">
                <p>{tweets.tweet}</p> 
                </div>
                
                <div className="action">
                    <table>
                        <tr>
                            <td><BsChat className="ic"  /><span>{tweets.comment}</span></td>
                            <td><AiOutlineRetweet className="ic"  /> <span>{tweets.retweet}</span></td>
                            <td><AiOutlineHeart className="ic"  /> <span>{tweets.love}</span></td>
                            <td><AiOutlineUpload className="ic"  /></td>
                        </tr>
                    </table>
                </div>
            </div>
         </div>
         
         </>
    )
}

export default TweetComponent;