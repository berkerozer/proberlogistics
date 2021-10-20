const Input = (props) => {
  const { name, type, id, placeholder } = props;

  return (
    <input
      className='w-full px-4 py-2 mb-4 border border-blue-300 rounded-md outline-none'
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
    />
  );
};

export default Input;
