import React from "react";
import TweetComponent from "./TweetComponent";


const TweetList = (props) => {
    if(props.tweet.length == 0){
        return (
            <div className="tweetlist">
                <div className="top">
                   <p className="none"> Belum ada tweet </p>
                </div>
            </div>
        )
    }
    else{
        return(
            <>
                <div className="tweetlist">
                <span onClick={() => props.sortingASC()}>Sorting ASC</span> -
                <span onClick={() => props.sortingDSC()}>Sorting DSC</span>
                    { props.tweet !==[] && props.tweet.map(tweets => <TweetComponent tweets={tweets} deleteTweet={props.deleteTweet} updateTweet={props.updateTweet} imgSource={props.imgSource} /> )}
                </div>
            </>
            )
    }
}

export default TweetList;