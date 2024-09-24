import ImageTag from "./tags/image";
import {Link} from "react-router-dom";

const Main = () => {

    return (
        <div className="App container">
            <Link to="/car/add" className="btn btn-success mb-3">ماشین جدید</Link>
            <div className="cars d-flex gap-3 flex-wrap">
                <div className="card">
                    <ImageTag src="/images/2.jpg" alt="car" classValue="card-img-top" />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk
                            of the
                            card's content.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main