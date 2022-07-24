import React from 'react'
import ReactDOM from 'react-dom';
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css"; // ES6
// import Editor from "react-quill/lib/toolbar";
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';
import { auth } from "../../firebase";



import "./question.css";
// import axios from "axios";
import { TagsInput } from "react-tag-input-component";
import { useHistory } from 'react-router-dom';
// import { selectUser } from "../../feature/userSlice";
// import { useHistory } from "react-router-dom";
// import ChipsArray from "./TagsInput";

const Question = () => {
  // const [editorState, setEditorState] = useState(() =>
  //   EditorState.createEmpty(),);
    
  const API = "https://guvi-stack-clone.herokuapp.com"

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [language1, setLanguage1] = useState();
  const [language2, setLanguage2] = useState();
  const [language3, setLanguage3] = useState();


  const history = useHistory();
 
  const addQuestion = () =>{

  const newQuestion = [
    {
      title: title,
      description: description,
      language1: language1,
      language2: language2,
      language3: language3,
      votes: "0",
      views: "0",
      username: "Rahul"
    }
  ]  

    fetch(`${API}/stack`, 
     {
      method: "POST",
      body:JSON.stringify(newQuestion),
      headers:{
        "Content-type": "application/json",
      },
    }).then(() => history.push("/"));
      console.log(newQuestion);
  }


  return (
    <div className="add-question">
      <div className="add-question-container">
        <div className="head-title">
          <h1>Ask a public question</h1>
        </div>
        <div className="question-container">
          <div className="question-options">
            <div className="question-option">
              <div className="title">
                <h3>Title</h3>
                <small>
                  Be specific and imagine you're asking a question to another person
                </small>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="e.g Is there an R function for finding teh index of an element in a hello?"
                />
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3>Body</h3>
                <small>
                  Include all the information someone would need to answer your
                  question
                </small>
                <input type="text"  className="question-area" onChange={(e) => setDescription(e.target.value)} />
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3>Tags</h3>
                <small>
                  Add up to 3 tags to describe what your question is about
                </small>
                <input type="text" className='tags' onChange={(e) => setLanguage1(e.target.value)}/>
                <input type="text" className='tags' onChange={(e) => setLanguage2(e.target.value)}/>
                <input type="text" className='tags' onChange={(e) => setLanguage3(e.target.value)}/>
                {/* <ChipsArray /> */}
              </div>

            </div>
          </div>
        </div>

        {/* <button onClick={handleSubmit} className="button">
          Add your question
        </button> */}
        <button className="button" onClick={addQuestion}>
          Add your question
        </button>
      </div>
    </div>
  )
}



export default Question