import { Container, Heading, VStack, Input, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container py="16" minH={'90vh'}>
      <form>
        <Heading
          textTransform={'uppercase'}
          children={'Cập nhật thông tin cá nhân'}
          my="16"
          textAlign={['center', 'left']}
        />
        <VStack spacing="8">
          <Input
            required
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nhập tên mới..."
            type={'text'}
            focusBorderColor="yellow.500"
          />

          <Input
            required
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Nhập email mới..."
            type={'email'}
            focusBorderColor="yellow.500"
          />

          <Input
            required
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu..."
            type={'password'}
            focusBorderColor="yellow.500"
          />

          <Button w="full" colorScheme={'yellow'} type="submit">
            Lưu thay đổi
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
