import React,{Fragment} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logout } from '../store/authSlicee';
const Header = () => {
const {error}=useSelector(state =>state.books)
const {isloadings}=useSelector((state)=>state.auth)
const dispatch =useDispatch()


  return (


    <Fragment>
      {
        error&&(
          <div className='alert alert-danger mb-0' role='alert'>
            {error}
          </div>
        )
      }

    <nav className='navbar navbar-dark bg-dark'>
      <span className='navbar-brand mb-0 h1'>My Books</span>

      <button className='btn btn-outline-primary' type='submit'
      onClick={()=>dispatch(logout())}
      
      >
      {
        isloadings ?'logout' :'log in'
      }
      </button>
    </nav>
    </Fragment>

  );
};

export default Header;
