const Content = (props) => {
  return (
    <div className='min-h-screen mt-8 pb-24 px-8 md:px-0 md:container md:mx-auto'>
      <h1 className='text-4xl capitalize border-b border-blue-300'>
        {props.title}
      </h1>
      <div className='mt-4'>{props.children}</div>
    </div>
  );
};

export default Content;
