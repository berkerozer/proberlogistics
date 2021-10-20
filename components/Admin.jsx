import Admincontent from './Admincontent';
import Adminnav from './Adminnav';
import Auth from './Auth';

const Admin = (props) => {
  return (
    <Auth>
      <div className='flex'>
        <Adminnav />
        <Admincontent title={props.title}>{props.children}</Admincontent>
      </div>
    </Auth>
  );
};

export default Admin;
