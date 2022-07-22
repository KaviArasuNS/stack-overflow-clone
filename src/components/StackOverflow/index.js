import React, { useState } from 'react'
import './index.css'
import Main from './Main'
import Sidebar from './Sidebar'
import "./main.css";

const index = () => {

    const stackData = [
    {
        title: "How to get state from custom hooks to update in parent component?",
        description: "I am trying to separate some logic from my component into a custom hook. I feel like i'm misunderstanding some fundamentals but I thought my code would work. I basically update my state in my custom useTrip hook, and i want my map component to have that same updated state.",
        language1: "javascript",
        language2: "reactjs",
        language3: "react-hooks",
        votes: "3",
        views: "10",
        username:"Rahul",

    },
     {
        title: "RTK Query Pattern for fetching data with query arguments",
        description: "I have an application where multiple components are fetching data like below and is using the data for some rendering. const {data} = useGetUserQuery({shippingAddressId: 123}); ",
        language1: "react-redux",
        language2: "redux-toolkit",
        language3: "rtk-query",
        votes: "16",
        views: "100",
        username:"Arjun",

    },
     {
        title: "Enum inside the Array is not validting in json-schema",
        description: "I am validating the json with json_schema.Allowed values for ghrBillingCode should be only 'I9NOT' expected result should be error as 2nd and 3rd node is not I9NOT but it is validating json as correct.",
        language1: "jsonschema",
        language2: "json-schema-validator",
        language3: "json",
        votes: "14",
        views: "50",
        username:"Martin",

    },
     {
        title: "How to pass a JSONResponse back to Django Template",
        description: "I have this custom view function that would be automatically executed when the user violates my login policy (this is done via django-axes). I am unable to display my JSONResponse data on Django template. May I know if there is any workaround on this?",
        language1: "json",
        language2: "django",
        language3: "ajax",
        votes: "20",
        views: "120",
        username:"Albert",

    },
     {
        title: "Hide div element after a few seconds Angular 7",
        description: "So I am having trouble understanding how to do this and how to approach this issue... I have a scroll animation on my page and I want to hide that div with animation after 3 seconds when it comes into view.",
        language1: "html",
        language2: "angular",
        language3: "javascript",
        votes: "5",
        views: "18",
        username:"Raman",

    },
];
  //   const API = "https://guvi-stack-clone.herokuapp.com";

  //   const [stackData, setStackData] = useState([]);

  //    const getAllQuestions = () => {
  //     fetch(`${API}/stack`
  //     ).then(data => data.json()).then(data => setStackData(data));
  // }

  // console.log(getAllQuestions);

  // useEffect(() => getAllQuestions,[])


  return (
    <div className='stack-index'>
        <div className='stack-index-content'>
            <Sidebar/>
            <Main/>
        </div>
    </div>
  )
}

export default index