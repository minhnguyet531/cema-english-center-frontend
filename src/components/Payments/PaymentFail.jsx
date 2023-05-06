import { Button, Container, Heading, Link, VStack } from '@chakra-ui/react';
import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link as RouterLink } from 'react-router-dom';

const PaymentFail = () => {
  return (
    <Container h="90vh" p="16">
      <VStack justifyContent={'center'} h="full" spacing={'4'}>
        <RiErrorWarningFill size={'5rem'} />
        <Heading children={'Thanh toán thất bại'} />
        <Link as={RouterLink} to="/subscribe">
          <Button variant={'ghost'}>Thử lại</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default PaymentFail;
