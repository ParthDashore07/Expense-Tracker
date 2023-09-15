import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { message } from "antd";
import "../../styles/HomePage.css";

const Header = () => {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logout Successful");
    navigate("/login");
  };
  return (
    <>
      <nav className="nb bg-light">
          <div className="nav-container">
            <div className="heading-container">
              <Link className="heading" to="/">
                Expense Tracker
              </Link>
            </div>
            <div>
            <ul className="nav-list">
              <li className="user-icon">
                  <UserOutlined /> {loginUser && loginUser.name}
              </li>
              <li>
                <button className="btn btn-danger" onClick={logoutHandler}>
                  Logout
                </button>
              </li>
            </ul>
            </div>
          </div>
      </nav>
    </>
  );
};

export default Header;
