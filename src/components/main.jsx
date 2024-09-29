import ImageTag from "./tags/image";
import {Link} from "react-router-dom";
import Spinner from "./Spinner";
import {useEffect,useState} from "react";
import DataBase from "../helper/DataBase";

const Main = () => {

    const [loading,setLoading] = useState(true);
    const [posts,setPosts] = useState({});

    useEffect(()=>{
       const fetchData = async () => {
           try{
               setLoading(false);
               const Data = await DataBase.getAllPosts();
               if (Data.status === 200){
                   setPosts(Data.data);
                   setLoading(true);
               }
           }catch (err){
               console.log(err.message);
           }
       }

       fetchData();

    }, []);


    if (loading === false){
        return (
            <Spinner/>
        )
    }
    else{
        return (
            <div className="App container">
                <Link to="/car/add" className="btn btn-success mb-3">ماشین جدید</Link>
                <div className="cars d-flex gap-3 flex-wrap">
                    {
                        posts.length > 0 ? posts.map(post => (
                            <div className="card">
                                <ImageTag src={post.imageAddress} alt="car" classValue="card-img-top"/>
                                <h5 className="my-2 mx-2">{post.name}</h5>
                                <div className="card-body">
                                    <p className="card-text">
                                        {post.content.slice(0, 50)}{post.content.length > 50 ? '...' : ''}
                                    </p>
                                </div>
                            </div>
                        )) : (
                            <h3>پوستی یافت نشد</h3>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Main