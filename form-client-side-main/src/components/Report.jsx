import { React, useContext, useEffect, useState } from "react";
import { Survey } from "../context/survey";
import { Validate } from "../context/Validate";

export const Report = ()=>{
    const { info, setinfo } = useContext(Survey);
    const { validate, setvalidate } = useContext(Validate);
    const {name,email,country,ratings}= info
    return (
        <div>
            <h1>Thanks {name} for Audio Survey</h1>
            <div>Name : {name}</div>
            <div>Email : {email}</div>
            <div>Country : {country}</div>
            <br />
            <div>{ratings.map((rating)=>
                    ( <div key={rating.genre}>
                        <p>Genre : {rating.genre} </p>
                        <p>Comment : {rating.comment} </p>
                        <div>{rating.ratings.map((rate)=>(
                            <div>
                                <span>Rating : {rate.rating} </span>
                                <audio style={{display:"inline-block"}} controls ><source src={rate.track}/></audio>
                            </div>
                        ))}</div>
                        <br/>
                    </div>)
            )}</div>

        
        </div>
    )
}