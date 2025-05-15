import React, { memo } from "react";
import InnerLayout from "@/components/shared/layout/innerlayout";
import PageTitle from "@/components/shared/pagetitle";
import BaseInput from "@/components/shared/inputs";
import FlatButton from "@/components/shared/button/flatbutton";
const UserRoleLayout = ({ children, title, handleSearch, handleAddNew }) => (
  <InnerLayout>
    <PageTitle
      title={title}
      buttons={
        <>
          <div>
            <BaseInput
              name="search"
              placeholder="Search"
              icon={<img src="../admin/assets/img/search-icon.png" />}
              onChange={handleSearch}
            />
          </div>
          <div>
            <FlatButton
              title="+ Add New"
              className="mx-auto add-new-btn"
              onClick={handleAddNew}
            />
          </div>
        </>
      }
    />
    {children}
  </InnerLayout>
);

export default memo(UserRoleLayout);
