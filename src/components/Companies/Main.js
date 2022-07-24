import React from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';
import "./main.css";
// import AllQuestions from "./AllQuestions";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from '../StackOverflow/Sidebar';
import Companies from './Companies';
import Button from '@mui/material/Button';


const Main = () => {

  
  
const API = "https://guvi-stack-clone.herokuapp.com";

const [companiesData, setCompaniesData] = useState([]);

  const getAllCompanies = () => {
      fetch(`${API}/companies`
      ).then(data => data.json()).then(data => {
        setCompaniesData(data);
        console.log("Data is fetched", data);
      });
  }



  useEffect(() => getAllCompanies(),[])

  // useEffect(()=>{

  //   fetch('https://guvi-stack-clone.herokuapp.com/stack')
  //   .then((data)=>data.json())
  //   .then((fetchData)=> {
  //     setStackData(fetchData)
  //     console.log("data is fetched",fetchData);
  //   });
    
  // },[]);

  return (
    <div className='stack-index'>
        <div className='stack-index-content'>
            <Sidebar/>
            <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2>All Questions</h2>
          <a href="/add-question"> 
            <Button variant="contained">Ask Question</Button>
           </a>
        </div>
        <div className="main-desc">
          {/* <p>{questions.length} questions</p> */}
          <div className="main-filter">
            <div className="main-tabs">
              <div className="main-tab">
                {/* <a href="/">Newest</a> */}
                <Link to="/">Newest</Link>
              </div>
              <div className="main-tab">
                <Link to="/">Active</Link>

                {/* <a href="/">Active</a> */}
              </div>
              <div className="main-tab">
                {/* <a href="/">More</a> */}
                <Link to="/">More</Link>
              </div>
            </div>
            <div className="main-filter-item">
              <FilterListIcon />
              <p>Filter</p>
            </div>
          </div>
        </div>
        <div className="questions">
          {/* {questions?.map((_q) => (
            <div className="question">
              <AllQuestions data={_q} />
            </div>
          ))} */}
           
          {/* <AllQuestions/> */}
          {companiesData.map((companiesData)=> <Companies companiesData={companiesData}/>)}
        </div>
      </div>
    </div>
        </div>
    </div>
   
  )
}

export default Main