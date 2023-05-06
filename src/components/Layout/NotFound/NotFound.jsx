import { Button, Container, Heading, Link, VStack } from '@chakra-ui/react';
import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link as RouterLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container h="90vh" p="16">
      <VStack justifyContent={'center'} h="full" spacing={'4'}>
        <RiErrorWarningFill size={'5rem'} />
        <Heading children={'Trang không tồn tại'} />
        <Link as={RouterLink} to="/">
          <Button variant={'ghost'}>Di chuyển đến trang chủ</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default NotFound;
