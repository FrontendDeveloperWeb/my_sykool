import React, { useState } from "react";
import {
  UserOutlined,
  LoadingOutlined,
  FilePdfOutlined,
  FileOutlined,
  FileImageOutlined,
  FileWordOutlined,
  FileExcelOutlined,
  FilePptOutlined,
} from "@ant-design/icons";
import { message, Upload, Avatar } from "antd";

// Helper function to convert file to base64
const getBase64 = (file, callback) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = function () {
    callback(reader.result);
  };
};

// Get appropriate icon based on file type
const getFileIcon = (fileType) => {
  if (fileType?.includes("pdf")) {
    return <FilePdfOutlined />;
  } else if (fileType?.includes("image")) {
    return <FileImageOutlined />;
  } else if (fileType?.includes("word") || fileType?.includes("doc")) {
    return <FileWordOutlined />;
  } else if (
    fileType?.includes("excel") ||
    fileType?.includes("sheet") ||
    fileType?.includes("csv")
  ) {
    return <FileExcelOutlined />;
  } else if (
    fileType?.includes("presentation") ||
    fileType?.includes("powerpoint")
  ) {
    return <FilePptOutlined />;
  } else {
    return <FileOutlined />;
  }
};

const FileUpload = ({
  // File validation props
  acceptedFileTypes = "image/jpeg,image/png,application/pdf",
  maxFileSize = 5, // in MB

  // Display props
  showPreview = true,
  previewType = "auto", // 'auto', 'image', 'icon'
  listType = "picture-card",
  defaultImage = "/assets/img/upload-img.png",
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
  const [loading, setLoading] = useState(false);
  const [fileUrl, setFileUrl] = useState(defaultImage);
  const [fileType, setFileType] = useState();

  // Validate file before upload
  const beforeUpload = (file) => {
    // Check file type if acceptedFileTypes is provided
    if (acceptedFileTypes) {
      const acceptedTypesArray = acceptedFileTypes.split(",");
      const isAcceptedType = acceptedTypesArray.some(
        (type) =>
          file.type === type ||
          (type.includes("*") && file.type.startsWith(type.replace("*", "")))
      );

      if (!isAcceptedType) {
        message.error(
          `You can only upload ${acceptedTypesArray.join(", ")} files!`
        );
        return false;
      }
    }

    // Check file size
    const isLtMaxSize = file.size / 1024 / 1024 < maxFileSize;
    if (!isLtMaxSize) {
      message.error(`File must be smaller than ${maxFileSize}MB!`);
      return false;
    }

    return true;
  };

  // Handle file change
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done" || info.file.status === "error") {
      setLoading(false);
    }

    if (info.file.originFileObj) {
      setFileType(info.file.type);

      // For image files, generate preview URL
      if (info.file.type.startsWith("image/")) {
        getBase64(info.file.originFileObj, (url) => {
          setFileUrl(url);

          // Call the onChange callback with file info
          if (onChange) {
            onChange({
              file: info.file.originFileObj,
              url,
              type: info.file.type,
            });
          }
        });
      } else {
        // For non-image files, just set the file type and call onChange
        if (onChange) {
          onChange({
            file: info.file.originFileObj,
            type: info.file.type,
          });
        }
      }
    }
  };

  // Determine what to render in the upload button
  const renderPreview = () => {
    if (loading) {
      return <LoadingOutlined />;
    }

    // If we have a file or defaultImage and should show preview
    if ((fileUrl || defaultImage) && showPreview) {
      // For image files or defaultImage
      if (fileType?.startsWith("image/") || (!fileType && fileUrl)) {
        if (shape === "circle") {
          return (
            <Avatar
              src={fileUrl}
              size={size}
              icon={<UserOutlined />}
              style={{
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          );
        } else {
          return (
            <img
              src={fileUrl}
              alt="preview"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          );
        }
      }
      // For non-image files or when previewType is 'icon'
      else if (previewType === "icon" || !fileType?.startsWith("image/")) {
        return (
          <div
            style={{
              fontSize: 24,
              color: "#1890ff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {getFileIcon(fileType)}
            <span style={{ fontSize: 12, marginTop: 8 }}>
              {fileType?.split("/")[1]?.toUpperCase()}
            </span>
          </div>
        );
      }
    }

    // Default state (no file selected)
    if (shape === "circle") {
      return (
        <Avatar
          size={size}
          icon={<UserOutlined />}
          style={{
            objectFit: "cover",
            borderRadius: "50%",
          }}
          src={defaultImage}
        />
      );
    } else {
      return (
        <div className="upload-icon">
          <FileImageOutlined style={{ fontSize: 24 }} />
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      );
    }
  };

  return (
    <Upload
      name="file"
      listType={listType}
      className={`file-uploader ${className}`}
      showUploadList={false}
      action=""
      accept={acceptedFileTypes}
      beforeUpload={beforeUpload}
      onChange={handleChange}
      fileList={fileList}
      disabled={disabled}
      customRequest={
        customRequest ||
        (({ onSuccess }) => {
          setTimeout(() => {
            onSuccess("ok");
          }, 0);
        })
      }
    >
      {renderPreview()}
    </Upload>
  );
};

export default FileUpload;
