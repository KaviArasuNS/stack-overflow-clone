import React from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';
import "./main.css";
// import AllQuestions from "./AllQuestions";
import { Link } from "react-router-dom";
import AllQuestions from './AllQuestions';

const Main = () => {
  return (
   <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2>All Questions</h2>
          {/* <Link href="/add-question">
            <button>Ask Question</button>
          </Link> */}
          
          <a href="/add-question"> 
            Ask Question
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
          <AllQuestions/>
          <AllQuestions/>
          <AllQuestions/>
          <AllQuestions/>
          <AllQuestions/>
        </div>
      </div>
    </div>
  )
}

export default Main