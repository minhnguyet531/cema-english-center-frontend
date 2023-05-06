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
  Textarea,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  return (
    <Container h="92vh">
      <VStack h="full" justifyContent={'center'} spacing={'16'}>
        <Heading children="Liên hệ" size={'2xl'} />
        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Họ tên" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Nhập họ tên"
              type={'text'}
              focusBorderColor="yellow.500"
            />
          </Box>

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
            <FormLabel htmlFor="message" children="Nội dung liên hệ" />
            <Textarea
              required
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Nhập nội dung liên hệ..."
              focusBorderColor="yellow.500"
            />
          </Box>

          <Button my="4" colorScheme={'yellow'} type="submit">
            Gửi email
          </Button>

          <Box my="4">
            Tư vấn khóa học ?{' '}
            <Link as={RouterLink} to="/request">
              <Button colorScheme={'yellow'} variant="link">
                Nhấp chuột ngay
              </Button>
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Contact;
