"use strict";

const constants = {
  base_path: "/",

  // API base URL - make sure this matches your backend API
  api_base_url: "http://localhost:8000",

  node_chat_url: "http://localhost:3333",

  default_language: "en",

  session_key: "SESSION_KEY",

  session_object: "authorization",

  pagination_size: 20,

  // Storage keys
  storage: {
    user: 'user',
    session: 'session',
    token: 'token',
  },
};

// Attach constants to window for global access
window.constants = constants;
export default constants;
