import React from "react";
import Sidebar from "./Sidebar";
import './Main.css'
import TweetPost from "./TweetPost";
import Trending from "./Trending";


function Main(){
    return(
        <div className="container">
                <Sidebar />
                <TweetPost />
                {/* <Trending /> */}
        </div>
    )
}

export default Main;