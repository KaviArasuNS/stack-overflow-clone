import React from 'react'
import { useState } from "react";
import "./allquestions.css";
// import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import { Avatar } from '@mui/material';
// import { stringAvatar } from "../../utils/Avatar";

const AllQuestions = ({stackData}) => {
  // const stackData = {
  //       title: "How to get state from custom hooks to update in parent component?",
  //       description: "I am trying to separate some logic from my component into a custom hook. I feel like i'm misunderstanding some fundamentals but I thought my code would work. I basically update my state in my custom useTrip hook, and i want my map component to have that same updated state.",
  //       language1: "javascript",
  //       language2: "reactjs",
  //       language3: "react-hooks",
  //       votes: "3",
  //       views: "10",
  //       username:"Rahul",

  //   };

  return (
    <div className="all-questions">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p></p>
              <p >Votes</p>
              <span className='margintop'>{stackData.votes}</span>                                                                   
            </div>
            <div className="all-option">
              {/* <p>{data?.answerDetails?.length}</p> */}
              <span>answers</span>
            </div>
            <div className="all-option">
              <small>{stackData.views}</small>                                                            
            </div>
          </div>
        </div>
        <div className="question-answer">
          <a href="/question">
            {stackData.title}                                                                       
            </a>
            {/* <Link to='/question'>Selenium using Java Project in VS code</Link> */}
          {/* <Link to={`/question?q=${data?._id}`}>{data.title}</Link> */}

          {/* <a href=>{data.title}</a> */}

          <div
            style={{
              maxWidth: "90%",
            }}
          >
            {stackData.description}                                                                
            {/* <div>{ReactHtmlParser(truncate(data.body, 200))}</div> */}
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <span className="question-tags">{stackData.language1}</span>                             
            <span className="question-tags">{stackData.language2}</span>                              
            <span className="question-tags">{stackData.language3}</span>                             
          </div>
          <div className="author">
            {/* <small>{data.create_at}</small> */}
            <div className="auth-details">
              {/* <Avatar {...stringAvatar(data?.user?.displayName)} /> */}
              <p>
                {/* {data?.user?.displayName
                  ? data?.user?.displayName
                  : "Natalie lee"} */}
                  <Avatar/>
                  <p>{stackData.username}</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllQuestions