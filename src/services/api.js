
const api = {
  login: { method: "POST", url: "/api/login" },
  fortgot_password: { method: "POST", url: "/api/forgot-password" },
  reset_password: { method: "POST", url: "/api/reset-password" },
  add_campus: { method: "POST", url: "/api/campus" },
  campus: { method: "GET", url: "/api/campus" },
  delete_campus: { method: "DELETE", url: "/api/campus" }, 
  add_department: { method: "POST", url: "/api/department" }, 
  departments: { method: "GET", url: "/api/department" }, 
  delete_department: { method: "DELETE", url: "/api/department" }, 
};

export default api;
