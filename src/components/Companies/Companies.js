import React from 'react'
import { useState } from "react";
import "./companies.css";
// import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import { Avatar } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DomainIcon from '@mui/icons-material/Domain';
// import { stringAvatar } from "../../utils/Avatar";

const Companies = ({companiesData}) => {

  return (
    <div className="all-questions">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <img src={companiesData.logo} alt="" />
          </div>
        </div>
        <div className="question-answer">
          <a href="/question">
            {companiesData.company_name}                                                                       
          </a>
            {/* <Link to='/question'>Selenium using Java Project in VS code</Link> */}
          {/* <Link to={`/question?q=${data?._id}`}>{data.title}</Link> */}

          {/* <a href=>{data.title}</a> */}
          <p><LocationOnIcon className="companiesPlace"/> {companiesData.place} <DomainIcon className="companiesPlace"/> {companiesData.domain} </p>
          <div
            style={{
              maxWidth: "90%",
            }}
          >
            {companiesData.description}                                                                
            {/* <div>{ReactHtmlParser(truncate(data.body, 200))}</div> */}
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <span className="question-tags">{companiesData.language1}</span>                             
            <span className="question-tags">{companiesData.language2}</span>                              
            <span className="question-tags">{companiesData.language3}</span>                             
            {/* {tags.map((_tag) => (
              <p
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {_tag}
              </p>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Companies





//  <div className="all-option">
//               <p>0</p>
//               <span>{stackData.votes}</span>                                                                   
//             </div>
//             <div className="all-option">
//               {/* <p>{data?.answerDetails?.length}</p> */}
//               <span>answers</span>
//             </div>
//             <div className="all-option">
//               <small>{stackData.views}</small>                                                            
//             </div>