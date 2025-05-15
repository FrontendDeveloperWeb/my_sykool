import React from 'react';

const AuthSidebar = (props) => {
    return (
       
          <div className="login-side-logo p-5">
          <div className='sideo-img w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={props.src} alt="" />
          </div>
        </div>
    );
  }

  export default AuthSidebar;
