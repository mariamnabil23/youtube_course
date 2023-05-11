import React from "react";
import About from "./About";
import { useState } from 'react';

const Home = (props)=>{

    const[initial , update] = useState(props.myname1);

    const changename = ()=>{
        update(props.hisname);
    }

    return(
        <div>
            {initial}
            <button onClick={changename}>change name</button>
            <h1>this is home page .. and my name is {props.myname} & my age is {props.myage}</h1>

            <About text="let's learn react.js" About2={props.about}/>
        </div>
    )
};

export default Home;