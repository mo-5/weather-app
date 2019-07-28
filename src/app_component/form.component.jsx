import React from 'react';
import './form.style.css';
const Form = props => {
  return (
    <div className='container'>
      <div>{props.error ? error() : null}</div>
      <form onSubmit={props.loadweather}>
        <div className='row'>
          <div className='col-med-3 offset-md-2'>
            <input
              type='text'
              className='form-control'
              name='city'
              autoComplete='off'
              placeholder='City'
            />
          </div>
          <div className='col-med-3'>
            <input
              type='text'
              className='form-control'
              name='country'
              autoComplete='off'
              placeholder='Country'
            />
          </div>
          <div className='col-med-3'>
            <select name='Select' id='sel'>
              <option value='metric' selected='selected'>
                Celsius
              </option>
              <option value='imperial'>Fahrenheit</option>
            </select>
          </div>
          <div className='col-med-3 mt-md-0 text-md-left offset-md-1'>
            <button className='btn btn-warning'>Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

function error() {
  return (
    <div className='alert alert-danger mx-5' role='alert'>
      Please Enter City and Country.
    </div>
  );
}

export default Form;
