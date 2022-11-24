import * as React from 'react';
import style from './BlueButton.module.css'

function BlueButton(props) {
    const {text, width, height} = props;


    const directStyle = {
        width: String(width)+"px",
        height: String(height)+"px"
    }//style={directStyle}

    return (<>
        <button  className={style.blueBtn}>{text}</button>
    </>);
}

export default BlueButton;