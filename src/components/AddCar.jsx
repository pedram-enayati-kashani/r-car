import {Link} from "react-router-dom";
import {Navi} from "../helper/Colors";
import {useState} from "react";

const AddCar = () => {

    const [formData, setFormData] = useState({
        name: "",
        content: "",
        imageAddress: ""
    });

    const [errors,setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if(!formData.name){
            newErrors.name = "نام الزامی است!";
        }

        if (!formData.content){
            newErrors.content = "محتوا الزامی است!";
        }

        if (!formData.imageAddress){
            newErrors.imageAddress = "آدرس عکس الزامی است!"
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()){
            console.log("فرم معتبر است و ارسال شد",formData)
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData,[name]:value});
    }

    return (
        <form onSubmit={handleSubmit} className="container d-flex align-items-center justify-content-center flex-column" action="" method="post">
            <h2 style={{color:Navi}}>ماشین جدید</h2>
            <div className="input-group mb-3">
                <div className="input-group d-flex align-items-center">
                    <label className="form-label" form="name" style={{width: "85px"}}>نام</label>
                    <input className="form-control" type="text" name="name" id="name" value={formData.name}
                           onChange={handleChange}/>
                </div>
                {errors.name && <span className="d-block mt-2" style={{color: 'red'}}>{errors.name}</span>}
            </div>
            <div className="input-group mb-3">
                <div className="input-group d-flex align-items-center">
                    <label className="form-label" form="content" style={{width: "85px"}}>محتوا</label>
                    <textarea className="form-control" name="content" id="content" value={formData.content}
                              onChange={handleChange}/>
                </div>
                {errors.content && <span className="d-block mt-2" style={{color: 'red'}}>{errors.content}</span>}
            </div>
            <div className="input-group mb-3">
                <div className="input-group d-flex align-items-center">
                    <label className="form-label" form="imageAddress" style={{width: "85px"}}>آدرس عکس</label>
                    <input className="form-control" type="text" name="imageAddress" id="imageAddress"
                           value={formData.imageAddress} onChange={handleChange}/>
                </div>
                {errors.imageAddress && <span className="d-block mt-2" style={{color: 'red'}}>{errors.imageAddress}</span>}
            </div>
            <div className="input-group d-flex align-items-center justify-content-center">
            <button type="submit" className="btn btn-success" style={{fontSize:"18px",fontWeight:"500"}}>ثبت</button>
                <Link to="/" className="btn btn-warning" style={{fontSize:"18px",fontWeight:"500"}}>انصراف</Link>
            </div>
        </form>
    )
}

export default AddCar;

