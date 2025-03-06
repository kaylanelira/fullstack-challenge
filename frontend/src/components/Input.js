function Input({placeholder, type = "text", value, onChange}) {
  return (
    <input 
      className="input"
      placeholder={placeholder} 
      type={type}
      value={value}
      onChange={onChange}/>
  );
}

export default Input