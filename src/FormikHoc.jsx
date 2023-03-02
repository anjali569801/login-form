import React from 'react';
import {useField} from 'formik'

function FormikHoc(IncomingComponent){
  function OutgoingComponent({id,type,name,...rest}) {

  const [field,meta]=useField(name);
  const {onChange,onBlur,value}=field;
  const{touched,error}=meta

  let borderClass="border-2"
  if( touched && error){
    borderClass="border-red-600 border-2"
  }
  return(
    <div>
    <IncomingComponent id={id}
      type={type}
      name={name}
      {...rest}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      className={borderClass}
      />
      { touched && error && <span className="text-red-700">{error}</span>}
    
   </div>
  );
    
  }
  return OutgoingComponent;
}
export default FormikHoc