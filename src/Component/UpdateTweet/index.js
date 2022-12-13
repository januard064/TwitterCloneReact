import React, {useState, useEffect } from "react";

import { AiOutlineClose } from 'react-icons/ai'

import './update.css'

const ModalUpdateTweet = (props) => {


    const [tweet ,setTweet] = useState(props.currentTweet)

    useEffect(
        () => {
            setTweet(props.currentTweet)
            console.log('isi data',tweet)
        },
        [props]
    )
    
    const handleInputChange = e => {
        const {name, value} = e.target

        setTweet({ ...tweet,[name]: value})
        console.log(value)
    }

    return(

        <form
        onSubmit={e => {
            e.preventDefault()

            props.postUpdate(tweet.id, tweet)
            // console.log(e.target.value)
        }}
        >
            <div className="modal">
                <div className="close">
                    <AiOutlineClose className="ic" onClick={() => props.closeModal()} />
                </div>
                <div className='top'>
                    <div className="profile">
                        <img src="/assets/images/user.jpg" alt="profile Image" />
                    </div>  
                    <div className="inputs">
                        <textarea autoFocus type="text" name="tweet" className="control" value={tweet.tweet} onChange={handleInputChange}  />
                    </div>
                </div>
                <div className="bottom">
                    <div className="btn">
                        <button>Update</button>
                    </div>
                </div>
                        
            </div>
        </form>
    )
}


export default ModalUpdateTweet;