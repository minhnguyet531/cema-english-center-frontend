import React, { useState } from 'react';
import { Container, Heading, VStack, Button, Input } from '@chakra-ui/react';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <Container py={'16'} h={'90vh'}>
      <form>
        <Heading
          children={'Quên mật khẩu'}
          my="16"
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />

        <VStack spacing={'8'}>
          <Input
            required
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="adb@gmail.com"
            type={'email'}
            focusBorderColor="yellow.500"
          />
        </VStack>

        <Button type="submit" w={'full'} my="8" colorScheme={'yellow'}>
          Gửi yêu cầu
        </Button>
      </form>
    </Container>
  );
};

export default ForgetPassword;
