
import React from 'react'
import { useState  , useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';


const ListItem = ( props ) => {
    const token = localStorage.getItem('token');
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setmovie] = useState(null);
  const {item } =props
  const handleClick = async (id)=>{
    const res = await axios.put("http://localhost:3001/user/fav", {Fav:id} , {
        headers:{
            authorization:JSON.parse(token)
        }
    })
    console.log(res);
  }  
  const handleWatch = async (id)=>{
    const res = await axios.put("http://localhost:3001/user/watched", {watched:id} , {
        headers:{
            authorization:JSON.parse(token)
        }
    })
    console.log(res);
  }
    return (
        <>
            {item && <div className="MovieBox"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
                    <div className="img">
                        {!isHovered &&<img src={item.img} alt=""/>}
                        {isHovered && <video src={item.trailer} autoPlay={true} muted loop />}
                    </div>
                    <div className="text">
                        <h4>{item.title}</h4>
                        <span>{item.limit}</span>
                        <span style={{marginLeft:"40px"}}>{`(${item.year})`}</span>
                        <br/>
                    </div>
                    <Link to={`/watch/${item._id}`}>
                        <button style={{backgroundColor:"rgb(18,198,178)" , }} onClick={()=>handleWatch(item._id)}>
                            <i className="fa fa-play"></i> PLAY NOW
                        </button>
                    </Link>
                    <button
                    onClick={()=>handleClick(item._id)}
                    ><FavoriteBorderIcon size="large"/></button>
            </div>}
        </>
    )
}

export default ListItem