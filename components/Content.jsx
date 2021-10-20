const Content = (props) => {
  return (
    <div className='min-h-screen px-10 pt-28'>
      <h1 className='text-3xl capitalize border-b border-blue-300'>
        {props.title}
      </h1>
      <div className='mt-4'>{props.children}</div>
    </div>
  );
};

export default Content;
