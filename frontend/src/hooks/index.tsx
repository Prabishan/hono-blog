import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";

export const useBlogs = () => {

    const [blogs, setBlogs] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
        
        }})
        .then((res)=>{
            setBlogs(res.data)
            setLoading(false)
        }).catch((err)=>{
            console.log(err)
        })
    },[]);

    return {blogs, loading}

}