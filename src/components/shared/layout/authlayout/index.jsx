import React from "react";
import AuthSidebar from "@/components/shared/layout/authlayout/authsidebar";

const AuthLayout = ({
  children,

  title,
  detail,
  src = "/assets/img/login-side-logo.png",
}) => {
  return (
    <div className="container-fluid gx-0">
      <div className="row gx-0">
        <div className="col-12 col-md-6 col-lg-8">
          <AuthSidebar src={src} />
        </div>
        <div className="d-flex align-items-center auth-bg px-2 p-lg-5 col-lg-4">
          <div className="login-dfrom-area">
            <div className="px-xl-2 mx-auto col-sm-8 col-md-6 col-lg-12">
              <h2 className="card-title mb-2 font-weight-bold">{title} </h2>
              <p className="card-text">{detail}</p>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default AuthLayout;
