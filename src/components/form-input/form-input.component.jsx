import React from "react";


const Input = ({ label, register, required }) => (
    <>
      <label>{label}</label>
      <input {...register(label, { required })} />
    </>
  );

export default Input;