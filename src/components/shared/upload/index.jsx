import React, { useState, memo } from "react";
import { message, Upload, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons"; // Ant Design icon for placeholder

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.readAsDataURL(img);
  reader.onloadend = function () {
    callback(reader.result);
  };
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
    return false;
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must be smaller than 2MB!");
    return false;
  }
  return true; // Allow the file to be uploaded
};

const CustomUpload = ({
  fileList,
  listType = "picture-circle",
  callback,
  static_img = "/images/upload-profile.png",
}) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    if (
      info.file.type === "image/jpg" ||
      info.file.type === "image/jpeg" ||
      info.file.type === "image/png"
    ) {
      getBase64(info.file.originFileObj, (url) => {
        setImageUrl(url);
        setLoading(false);
        callback(info.file); // Call callback to pass the file back
      });
    }
  };

  return (
    <Upload
      name="avatar"
      listType={listType}
      className="avatar-uploader"
      showUploadList={false}
      action="" // No actual upload action for now, just handle client-side
      beforeUpload={beforeUpload}
      onChange={handleChange}
      fileList={fileList}
      crossOrigin="*"
    >
      {imageUrl ? (
        <Avatar
          src={imageUrl}
          size={100}
          icon={<UserOutlined />}
          style={{
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      ) : (
        <Avatar
          size={100}
          icon={<UserOutlined />} // Default user icon
          style={{
            objectFit: "cover",
            borderRadius: "50%",
          }}
          src={static_img}
        />
      )}
    </Upload>
  );
};

export default memo(CustomUpload);
