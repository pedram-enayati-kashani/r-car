import {Link} from "react-router-dom";
import {Navi} from "../helper/Colors";

const AddCar = () => {
    return (
        <form className="container d-flex align-items-center justify-content-center flex-column" action="" method="post">
            <h2 style={{color:Navi}}>ماشین جدید</h2>
            <div className="input-group d-flex align-items-center mb-3">
                <label className="form-label" form="name" style={{width:"85px"}}>نام</label>
                <input className="form-control" type="text" name="name" id="name" required/>
            </div>
            <div className="input-group d-flex align-items-center mb-3">
                <label className="form-label" form="content" style={{width:"85px"}}>محتوا</label>
                <textarea className="form-control" name="content" id="content" required></textarea>
            </div>
            <div className="input-group d-flex align-items-center mb-3">
                <label className="form-label" form="imageAddress" style={{width:"85px"}}>آدرس عکس</label>
                <input className="form-control" type="text" name="imageAddress" id="imageAddress"/>
            </div>
            <div className="input-group d-flex align-items-center justify-content-center">
                <button type="submit" className="btn btn-success" style={{fontSize:"18px",fontWeight:"500"}}>ثبت</button>
                <Link to="/" className="btn btn-warning" style={{fontSize:"18px",fontWeight:"500"}}>انصراف</Link>
            </div>
        </form>
    )
}

export default AddCar;