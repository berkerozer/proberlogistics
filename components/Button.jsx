const Button = (props) => {
  const { children } = props;
  return (
    <button className='w-full px-4 py-2 text-center bg-blue-400 rounded-md hover:bg-blue-500'>
      {children}
    </button>
  );
};

export default Button;
