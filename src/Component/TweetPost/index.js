import React, {useState, useEffect } from "react";
import CreateTweet from "./CreateTweet";
import TweetList from "../TweetList";
import ModalUpdateTweet from "../UpdateTweet";
import './TweetPost.css';
import Trending from "../Trending";

const TweetPost = () => {

    const dataTweet = [
        {
            id: 1,
            name: 'Dummy User',
            username: "akun",
            tweet:'Hai this is my first tweet',
            time: '02 December 2021',
            comment: 10,
            retweet: 12,
            love: 20
        },
        {
            id: 2,
            name: 'Dummy User',
            username: "akun",
            tweet:'Hai this is my second tweet',
            time: '01 December 2021',
            comment: 10,
            retweet: 12,
            love: 20
        }
    ]

    const [imgSource, setimgSource] = useState('')
    useEffect(()=> {
        const userData = JSON.parse(localStorage.getItem('DataUser'));
        setimgSource(userData.imgSource)
    },[])

    // useEffect(()=>{
    //     sortingASC();
    // },[])

    // useEffect(()=>{
    //     sortingDSC();
    // },[])


    const[tweet, setTweet] = useState (dataTweet)

    //sorting tweet
    tweet.sort((a,b) =>  parseInt(b.time)-parseInt(a.time) );
    
    //postTweet
    const postTweet = tweets => {
        tweets.id = tweet.length + 1
        tweets.time =new Date().toISOString();
        const userData = JSON.parse(localStorage.getItem('DataUser'));
        tweets.name = userData.username
        tweets.username = userData.email
        setTweet([...tweet, tweets])

        console.log('data',tweets)
        
    }

    //deleteTweet
    const deleteTweet = id => {
       setTweet(tweet.filter(tweets => tweets.id !== id))
      
    }

    //updateTweet
    const [modal, setModal] = useState(false);

    const [currentTweet, setCurrentTweet] = useState()


    const updateTweet = (tweets) => {
        setModal(!modal)
        setCurrentTweet({id: tweets.id, name:tweets.name, username: tweets.username, tweet: tweets.tweet, time: new Date().toISOString(), comment: tweets.comment, retweet: tweets.retweet, love: tweets.love})
        console.log('selected data',tweets)
    }

    const postUpdate =(id, updatedTweet) => {
        setTweet(tweet.map(tweets => (tweets.id === id ? updatedTweet: tweets)))
        setModal(!modal)
        console.log('updated tweet',updatedTweet)
    }

    const closeModal = () =>{
        setModal(!modal)
    }

    //Sorting
    // const[order, setOrder]= useState("ASC")
    const sortingASC = () => {
        const sorted = [...tweet].sort((a,b) =>  parseInt(a.time) - parseInt(b.time) )
        setTweet(sorted);
        console.log(tweet)
    }

    const sortingDSC = () => {
        const sorted = [...tweet].sort((a,b) =>  parseInt(b.time) - parseInt(a.time))
        setTweet(sorted);
        console.log(tweet)
    }
    
    //search
    const search = (search) => {
        // console.log('search',search)
        // const search =[...tweet].filter(tweets => tweets.tweet === search )
        // setTweet(search)
        // console.log(search)
    }


    return(
        <>
        <div className="tweets">
            <div className="title">
                <h3>Home</h3>
            </div>
            <CreateTweet postTweet={postTweet} imgSource={imgSource} />
            <TweetList tweet={tweet} deleteTweet={deleteTweet} updateTweet={updateTweet} imgSource={imgSource} sortingASC={sortingASC} sortingDSC={sortingDSC}/>
            {
                modal && <ModalUpdateTweet currentTweet={currentTweet} postUpdate={postUpdate} closeModal={closeModal}  />
            }
        </div>
                <Trending search={search}/>
        </>
    )
}

export default TweetPost;