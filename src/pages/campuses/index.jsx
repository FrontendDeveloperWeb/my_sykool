import React, { useState, memo } from "react";
import InnerLayout from "@/components/shared/layout/innerlayout";
import HeaderButtons from "@/components/shared/headerbuttons";
import IconButton from "@/components/shared/button/iconbutton";
import FlatButton from "@/components/shared/button/flatbutton";
import BaseInput from "@/components/shared/inputs";
import {
  DeleteOutlined,
  EditOutlined,
  HomeOutlined,
  MailOutlined,
  MobileOutlined,
  PhoneOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { usePaginatedQuery } from "@/hooks/reactQuery";
import { Pagination, Empty, Skeleton } from "antd";
import { debounce } from "lodash";
import useSweetAlert from "@/hooks/useSweetAlert";
import { useMutation } from "../../hooks/reactQuery";

const ManageCampuses = () => {
  const { showAlert } = useSweetAlert();
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageSize, setCurrentPageSize] = useState(12);

  const debouncedSearch = debounce((value) => {
    setSearchKeyword(value);
    setCurrentPage(1);
  }, 500);

  const {
    data: campusData,
    isLoading,
    isError,
    error,
    refetch,
  } = usePaginatedQuery("campus", {
    params: {
      keyword: searchKeyword,
      page: currentPage,
      limit: currentPageSize,
    },
    initialPage: currentPage,
    initialPageSize: currentPageSize,
    // Enable caching for better performance
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
  const { mutate: deleteCampus, isPending: isDeleting } = useMutation(
    "delete_campus",
    {
      showSuccessNotification: true,
      invalidateQueries: ["campus"],
    }
  );

  // Handle search input change
  const handleSearchChange = (e) => {
    debouncedSearch(e.target.value);
  };

  // Handle pagination change
  const handlePageChange = (newPage, newPageSize) => {
    setCurrentPage(newPage);
    setCurrentPageSize(newPageSize);
  };

  const handleDeleteCampus = async (campusId) => {
    const result = await showAlert({
      text: "Are you sure you want delete this campus?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      deleteCampus({ data: "", slug: campusId });
    }
  };
  return (
    <InnerLayout
      className="h-100"
      headerButtons={<HeaderButtons group="dashboard" />}
    >
      <div className="row mt-3">
        <div className="col-12">
          <div className="d-flex align-items-center">
            <div>
              <IconButton
                icon="+"
                title="Add Branch"
                className="add-btn btn"
                onClick={() => navigate("/manage-addcampuses")}
              />
            </div>
            <div className="w-100 search-group">
              <BaseInput
                icon={<SearchOutlined />}
                placeholder="Search....."
                className="search-input"
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="row mt-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              >
                <div className="campus-card">
                  <div
                    className="campus-header"
                    style={{ background: "#f0f0f0" }}
                  >
                    <Skeleton.Input active style={{ width: 150, height: 24 }} />
                  </div>
                  <div className="campus-body">
                    <Skeleton.Input
                      active
                      style={{ width: "80%", height: 20, marginBottom: 16 }}
                    />
                    <div className="d-flex mb-2">
                      <Skeleton.Avatar
                        active
                        size={16}
                        style={{ marginRight: 8 }}
                      />
                      <Skeleton.Input
                        active
                        style={{ width: "70%", height: 16 }}
                      />
                    </div>
                    <div className="d-flex mb-2">
                      <Skeleton.Avatar
                        active
                        size={16}
                        style={{ marginRight: 8 }}
                      />
                      <Skeleton.Input
                        active
                        style={{ width: "70%", height: 16 }}
                      />
                    </div>
                    <div className="d-flex mb-2">
                      <Skeleton.Avatar
                        active
                        size={16}
                        style={{ marginRight: 8 }}
                      />
                      <Skeleton.Input
                        active
                        style={{ width: "70%", height: 16 }}
                      />
                    </div>
                  </div>
                  <div className="campus-footer">
                    <Skeleton.Button
                      active
                      style={{ width: 40, marginRight: 8 }}
                    />
                    <Skeleton.Button active style={{ width: 40 }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : isError ? (
          <div className="col-12 text-center mt-5">
            <p>Error loading campuses: {error?.message}</p>
            <FlatButton
              title="Retry"
              onClick={() => refetch()}
              className="btn save-btn"
            />
          </div>
        ) : (
          <>
            <div className="row mt-4">
              {campusData?.data?.length > 0 ? (
                campusData.data.map((campus) => (
                  <div
                    key={campus.id}
                    className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                  >
                    <Link to={`/manage-addcampuses/${campus.uid}`}>
                      <div className="campus-card">
                        <div className="campus-header">
                          <h3 className="color-fff">{campus.branch_name}</h3>
                        </div>
                        <div className="campus-body">
                          <p className="font-14 font-600 mb-3">
                            {campus.school_name}
                          </p>
                          <div className="d-flex mb-2 ">
                            <div>
                              <PhoneOutlined />
                            </div>
                            <div className="ms-2">
                              <p className="color-light">
                                {campus.phone_number}
                              </p>
                            </div>
                          </div>
                          <div className="d-flex mb-2 ">
                            <div>
                              <MobileOutlined />
                            </div>
                            <div className="ms-2">
                              <p className="color-light">{campus.mobile_no}</p>
                            </div>
                          </div>
                          <div className="d-flex mb-2 ">
                            <div>
                              <MailOutlined />
                            </div>
                            <div className="ms-2">
                              <p className="color-light">{campus.email}</p>
                            </div>
                          </div>
                          <div className="d-flex mb-2 ">
                            <div>
                              <MailOutlined />
                            </div>
                            <div className="ms-2">
                              <p className="color-light">{campus.website}</p>
                            </div>
                          </div>
                          <div className="d-flex mb-2 ">
                            <div>
                              <HomeOutlined />
                            </div>
                            <div className="ms-2">
                              <p className="color-light">{campus.address}</p>
                            </div>
                          </div>
                        </div>
                        <div className="campus-footer">
                          <div className="cam-icon border-purple me-2">
                            <FlatButton
                              title={<EditOutlined />}
                              tootlip="Edit"
                              onClick={() =>
                                navigate(`/manage-addcampuses/${campus.uid}`)
                              }
                            />
                          </div>
                          <div className="cam-icon border-red">
                            <FlatButton
                              title={<DeleteOutlined />}
                              tootlip="Delete"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleDeleteCampus(campus.uid);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center mt-5">
                  <Empty description="No campuses found" />
                </div>
              )}
            </div>

            {/* Pagination */}
            {campusData?.paginate && campusData?.data?.length > 0 && (
              <div className="row mt-4">
                <div className="col-12 d-flex justify-content-end">
                  <Pagination
                    current={currentPage}
                    pageSize={currentPageSize}
                    total={campusData?.paginate?.total || 0}
                    onChange={handlePageChange}
                  />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </InnerLayout>
  );
};

export default memo(ManageCampuses);
