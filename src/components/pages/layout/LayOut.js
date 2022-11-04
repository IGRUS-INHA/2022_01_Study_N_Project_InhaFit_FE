import {Outlet} from "react-router-dom"

function LayOut(props) {
    return(<>
     <h1>Layout</h1>
    <Outlet/>
    </>);
}

export default LayOut;