import React from "react";
import { useState } from "react";
import { CloudUploadOutlined, LoadingOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import FileUpload from "../upload/FileUpload";

// Keep the original getBase64 and beforeUpload functions for backward compatibility
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const UploadProfile = ({
  // File validation props
  acceptedFileTypes,
  maxFileSize,

  // Display props
  showPreview = true,
  previewType,
  listType = "picture-card",
  defaultImage = "/assets/img/upload-img.png",
  defaultImageUrl, // For backward compatibility
  size = 100,
  shape = "square", // 'square', 'circle'

  // Callback and control props
  onChange,
  customRequest,
  disabled = false,

  // Additional props
  fileList,
  className = "",
}) => {
  // For backward compatibility, use the old implementation if minimal props are provided
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("/assets/img/upload-img.png");

  // Use the new FileUpload component for all cases
  return (
    <FileUpload
      acceptedFileTypes={
        acceptedFileTypes || "image/jpeg,image/png,application/pdf"
      }
      maxFileSize={maxFileSize || 2}
      showPreview={showPreview}
      previewType={previewType || "auto"}
      listType={listType}
      defaultImage={defaultImageUrl || defaultImage}
      size={size}
      shape={shape}
      onChange={
        onChange ||
        ((fileInfo) => {
          // Default onChange handler for backward compatibility
          if (fileInfo.url) {
            setImageUrl(fileInfo.url);
          }
        })
      }
      customRequest={customRequest}
      disabled={disabled}
      fileList={fileList}
      className={className}
    />
  );
};

export default UploadProfile;
