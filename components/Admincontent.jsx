const Admincontent = (props) => {
  return (
    <div className='w-4/5 h-screen p-8 overflow-y-scroll bg-gray-200'>
      <h1 className='text-2xl capitalize border-b border-blue-400'>
        {props.title}
      </h1>
      <div className='pt-4'>{props.children}</div>
    </div>
  );
};

export default Admincontent;
