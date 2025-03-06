function Button({name, type}) {
  return (
    <button className="button" type={type}>
      {name}
    </button>
  );
}

export default Button