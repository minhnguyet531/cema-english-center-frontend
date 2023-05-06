import React, { useState } from 'react';
import { Container, Heading, VStack, Button, Input } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const params = useParams();

  //   console.log(params.token);

  return (
    <Container py={'16'} h={'90vh'}>
      <form>
        <Heading
          children={'Đặt lại mật khẩu'}
          my="16"
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />

        <VStack my={'4'} spacing={'8'}>
          <Input
            required
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu mới"
            type={'password'}
            focusBorderColor="yellow.500"
          />
        </VStack>

        <VStack spacing={'8'}>
          <Input
            required
            id="confirmPassword"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder="Nhập lại mật khẩu mới"
            type={'password'}
            focusBorderColor="yellow.500"
          />
        </VStack>

        <Button type="submit" w={'full'} my="8" colorScheme={'yellow'}>
          Cập nhật mật khẩu mới
        </Button>
      </form>
    </Container>
  );
};

export default ResetPassword;
