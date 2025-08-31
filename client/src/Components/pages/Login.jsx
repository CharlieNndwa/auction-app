import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import axios from "axios";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

// Basic styled-components for a clean, modern layout
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f4f7f9;
`;

const FormWrapper = styled(motion.div)`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

const FormHeader = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: 600;
`;

const FormInput = styled.div`
  position: relative;
  margin-bottom: 20px;
  input {
    box-sizing: border-box;
    width: 100%;
    padding: 12px 12px 12px 45px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    transition: all 0.3s ease;
    &:focus {
      border-color: #007bff;
      outline: none;
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
    }
  }
  .icon {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    color: #aaa;
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 15px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #0056b3;
  }
`;

const SocialButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 15px;
  background: #4285f4;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;
  transition: all 0.3s ease;
  .icon {
    margin-right: 10px;
  }
  &:hover {
    background: #357ae8;
  }
`;

const StyledLink = styled.a`
  display: block;
  text-align: center;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  // ... rest of the component is unchanged
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/login`,
        formData
      );
      login(res.data.token);
      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed.");
    }
  };

  return (
    <LoginContainer>
      <FormWrapper
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FormHeader>Log In</FormHeader>
        <form onSubmit={handleLogin}>
          <FormInput>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={onChange}
              required
            />
          </FormInput>
          <FormInput>
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={onChange}
              required
            />
          </FormInput>
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Log In
          </SubmitButton>
        </form>
        <SocialButton
          href={`${process.env.REACT_APP_BACKEND_URL}/api/users/google`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={faGoogle} className="icon" />
          Continue with Google
        </SocialButton>
        <StyledLink href="/register">Don't have an account? Sign Up</StyledLink>
      </FormWrapper>
    </LoginContainer>
  );
};

export default Login;
