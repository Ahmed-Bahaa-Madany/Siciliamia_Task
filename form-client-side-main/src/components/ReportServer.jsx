import { React, useContext, useEffect,useState  } from "react";
import axios from "axios";

export const ReportServer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/survey")
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            {data.map((d)=>(
            <div key={d._id}>
                <p>name : {d.name}</p>
                <p>{d.email}</p>
                <p>{d.country}</p>
                <br />
                <div>{d.ratings.map((rating)=>
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
        ))}
        </div>
    );
};
