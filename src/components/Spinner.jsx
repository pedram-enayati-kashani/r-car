import SpinnerGif from '../assets/loading-gif-png-4.gif'

const Spinner = () => {
    return (
        <div className="spinner position-fixed w-100 h-100 d-flex align-items-center justify-content-center z-1" style={{backgroundColor:"#000000e0",top:"0",right:"0"}}>
            <img src={SpinnerGif} alt="Spinner"/>
        </div>
    )
}

export default Spinner;