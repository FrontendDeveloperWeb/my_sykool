
const api = {
  login: { method: "POST", url: "/api/login" },
  fortgot_password: { method: "POST", url: "/api/forgot-password" },
  reset_password: { method: "POST", url: "/api/reset-password" },
  add_campus: { method: "POST", url: "/api/campus" },
  campus: { method: "GET", url: "/api/campus" },
  delete_campus: { method: "DELETE", url: "/api/campus" }, 
  add_department: { method: "POST", url: "/api/department" }, 
  department: { method: "GET", url: "/api/department" }, 
  delete_department: { method: "DELETE", url: "/api/department" },
  add_staff_department: { method: "POST", url: "/api/staff-department" }, 
  staff_department: { method: "GET", url: "/api/staff-department" }, 
  delete_staff_department: { method: "DELETE", url: "/api/staff-department" },
  add_class: { method: "POST", url: "/api/class" }, 
  class: { method: "GET", url: "/api/class" }, 
  delete_class: { method: "DELETE", url: "/api/class" },
};

export default api;
