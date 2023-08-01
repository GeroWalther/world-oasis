import styled from 'styled-components';
import LoginForm from '../features/authentication/LoginForm';
import Logo from '../ui/Logo';
import Heading from '../ui/Heading';
import { useNavigate } from 'react-router-dom';
import { useGetUser } from '../features/authentication/useGetUser';
import Spinner from '../ui/Spinner';
import { useEffect } from 'react';
import { FullPage } from '../ui/ProtectedRout';

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useGetUser();

  useEffect(() => {
    if (isAuthenticated && !isLoading) navigate('/');
  }, [navigate, isAuthenticated, isLoading]);

  if (isLoading)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );

  return (
    <LoginLayout>
      <Logo />
      <Heading as='h4'>Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
