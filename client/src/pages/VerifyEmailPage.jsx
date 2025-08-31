import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f4f7f9;
  text-align: center;
`;

const ContentBox = styled(motion.div)`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

const IconWrapper = styled.div`
  margin-bottom: 20px;
  font-size: 4rem;
  color: ${(props) => (props.success ? '#28a745' : '#dc3545')};
`;

const Message = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: #333;
`;

const SubMessage = styled.p`
  margin-top: 10px;
  color: #666;
`;

const LoadingMessage = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const VerifyEmailPage = () => {
  const [verificationStatus, setVerificationStatus] = useState('verifying');
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/verify/${token}`);
        setVerificationStatus('success');
        toast.success('Email verified successfully!');
        // Optional: Redirect to login page after a delay
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } catch (error) {
        setVerificationStatus('error');
        toast.error(error.response?.data?.message || 'Verification failed. The link may be invalid or expired.');
      }
    };

    if (token) {
      verifyToken();
    }
  }, [token, navigate]);

  return (
    <PageContainer>
      <ContentBox
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {verificationStatus === 'verifying' && (
          <LoadingMessage>Verifying your email address...</LoadingMessage>
        )}
        {verificationStatus === 'success' && (
          <>
            <IconWrapper success>
              <FontAwesomeIcon icon={faCheckCircle} />
            </IconWrapper>
            <Message>Email Verified!</Message>
            <SubMessage>You will be redirected to the login page shortly.</SubMessage>
          </>
        )}
        {verificationStatus === 'error' && (
          <>
            <IconWrapper>
              <FontAwesomeIcon icon={faTimesCircle} />
            </IconWrapper>
            <Message>Verification Failed</Message>
            <SubMessage>The verification link is invalid or has expired. Please try registering again.</SubMessage>
          </>
        )}
      </ContentBox>
    </PageContainer>
  );
};

export default VerifyEmailPage;