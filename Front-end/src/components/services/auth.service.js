import axios from "axios";

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  logout,
};
