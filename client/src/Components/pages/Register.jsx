import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

// Reusing styled-components from Login for consistency
const RegisterContainer = styled.div`
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
    width: 100%;
    padding: 12px 12px 12px 40px;
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
  padding: 12px;
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

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/register`,
        formData
      );
      // Change the success message here
      toast.success("Registration successful! You can now log in.");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <RegisterContainer>
      <FormWrapper
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FormHeader>Create an Account</FormHeader>
        <form onSubmit={handleRegister}>
          <FormInput>
            <FontAwesomeIcon icon={faUser} className="icon" />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={onChange}
              required
            />
          </FormInput>
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
            Register
          </SubmitButton>
        </form>
        <SocialButton
          href={`${process.env.REACT_APP_BACKEND_URL}/api/users/google`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={faGoogle} className="icon" />
          Sign up with Google
        </SocialButton>
        <StyledLink href="/login">Already have an account? Log In</StyledLink>
      </FormWrapper>
    </RegisterContainer>
  );
};

export default Register;
