import React from 'react';
import './form.style.css';
const Form = props => {
  return (
    <div className='container'>
      <div>{props.error ? error() : null}</div>
      <div>{props.serverError ? serverError(props.serverError) : null}</div>
      <form onSubmit={props.loadweather}>
        <div className='row'>
          <div className='col-md-2 offset-md-2'>
            <input
              type='text'
              className='form-control'
              placeholder='City'
              name='city'
              autoComplete='off'
            />
          </div>
          <div className='col-md-2'>
            <input
              type='text'
              className='form-control'
              placeholder='Country'
              name='country'
              autoComplete='off'
            />
          </div>
          <div className='col-md-2'>
            <select name='Select' id='sel' className='form-control'>
              <option value='metric' selected='selected'>
                Celsius
              </option>
              <option value='imperial'>Fahrenheit</option>
            </select>
          </div>
          <div className='col-md-2 mt-md-0 mt-2 text-md-left '>
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

function serverError(msg) {
  return (
    <div className='alert alert-danger mx-5' role='alert'>
      {msg}
    </div>
  );
}

export default Form;
