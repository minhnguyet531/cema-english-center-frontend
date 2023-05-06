import React, { useState } from 'react';
import {
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
  Box,
  Link,
  Button,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent="center" spacing={'16'}>
        <Heading children={'Đăng nhập'} />

        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="adb@gmail.com"
              type={'email'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="password" children="Mật khẩu" />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
              type={'password'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box>
            <Link as={RouterLink} to="/forgetpassword">
              <Button fontSize={'sm'} variant="link">
                Quên mật khẩu
              </Button>
            </Link>
          </Box>

          <Button my="4" colorScheme={'yellow'} type="submit">
            Đăng nhập
          </Button>

          <Box my="4">
            Bạn chưa có tài khoản ?{' '}
            <Link as={RouterLink} to="/register">
              <Button colorScheme={'yellow'} variant="link">
                Đăng ký
              </Button>
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
