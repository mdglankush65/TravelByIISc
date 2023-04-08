import React from 'react'

const Option = (props) => {
  return (
        <div className="form-check">
            <input className="form-check-input" type="radio" name={props.name} id="flexRadioDefault1" />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
                {props.data}
            </label>
        </div>
  )
}

export default Option
