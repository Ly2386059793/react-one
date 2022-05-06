import {getDataList} from "../http/api";
import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
function Home(){
    let [domain,setDomain] = useState([]);
    function getData(){
        getDataList().then(res=>{
            setDomain(res.data.result)
        })
    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <div>
            {
                domain.map((value)=>{
                    return(
                        <div>
                            <h1>{value.title}</h1>
                            {
                                value.list.map((v)=>{
                                    return(
                                        <Link to={`/news/${v._id}`}>
                                            <p>{v.title}</p>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Home
