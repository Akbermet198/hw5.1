import './formInput.css'

const FormInput =({id, labelName, placeholder, inputType,   ...rest})=>{
 return(
  <div className="container">
   <label className='label' htmlFor={id} >{labelName}</label>

   <input className='input'
   placeholder={placeholder || "..."} 
   id={id} 
   type={inputType}
    {...rest}></input>

  </div>
 )
}
export default FormInput