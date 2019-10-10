import React from "react"
import "./style.css";

const FormInput = (props) => {
    return (
        <div className="form-group">
            <label><h4>{props.title}</h4></label>
            <input type="text" className="form-control" name={props.name} value={props.value} onChange={props.onChange} />
        </div>
    )
}

export default FormInput
