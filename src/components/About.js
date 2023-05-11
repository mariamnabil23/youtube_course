import React from "react";

const About = (props)=>{


    const friends = ["mariam" , "fady" , "ali" , "mona"];
    const list = friends.map( (friend)=>{
        return(
            <li>{friend}</li>
        )
    });

    return(
        <div>
            <h1>this is About page .. {props.text} ..... {props.About2}</h1>

            <ul>{list}</ul>
            
        </div>
    )
};

export default About;