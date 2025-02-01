import { useNavigate } from "react-router-dom";
const ButtonBack =()=>{
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    return(

        <button onClick={goBack} className="get_back">Get back</button>
    )
}
export default ButtonBack;