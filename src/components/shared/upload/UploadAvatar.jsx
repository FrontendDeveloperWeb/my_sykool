import React, { useState } from "react";
import { UserOutlined, LoadingOutlined } from "@ant-design/icons";
import { message, Upload, Avatar } from "antd";

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
  return true;
};

const UploadAvatar = ({
  fileList,
  size = 100,
  callback,
  static_img = "/images/upload-profile.png",
  disabled = false
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
        if (callback) callback({
          file: info.file.originFileObj,
          url,
          type: info.file.type
        });
      });
    }
  };

  return (
    <Upload
      name="avatar"
      listType="picture-circle"
      className="avatar-uploader"
      showUploadList={false}
      action=""
      beforeUpload={beforeUpload}
      onChange={handleChange}
      fileList={fileList}
      crossOrigin="*"
      disabled={disabled}
      customRequest={({ onSuccess }) => {
        setTimeout(() => {
          onSuccess("ok");
        }, 0);
      }}
    >
      {loading ? (
        <LoadingOutlined />
      ) : imageUrl ? (
        <Avatar
          src={imageUrl}
          size={size}
          icon={<UserOutlined />}
          style={{
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      ) : (
        <Avatar
          size={size}
          icon={<UserOutlined />}
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

export default UploadAvatar;