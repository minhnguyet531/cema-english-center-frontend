import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { Link as RouterLink } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <Container h="90vh" p="16">
      <Heading
        my="8"
        alignItems={'center'}
        textAlign={'center'}
        children={'Thanh toán thành công'}
      />

      <VStack pb="16" boxShadow={'lg'} alignItems="stretch" borderRadius={'lg'}>
        <Box
          w="full"
          p="4"
          bg="yellow.400"
          css={{ borderRadius: '8px 8px 0 0' }}
        >
          <Text color="black">Thanh toán thành công</Text>
        </Box>

        <Box p="4">
          <VStack textAlign={'center'} px="8" mt={'4'} spacing="8">
            <Text>
              Chúc mừng bạn đã trở thành học viên chính thức của CEMA. Bạn có
              thể đăng nhập vào tài khoản của mình để bắt đầu học tập.
            </Text>

            <Heading size="4xl">
              <RiCheckboxCircleFill />
            </Heading>
          </VStack>
        </Box>

        <Link as={RouterLink} to="/profile">
          <Button variant={'ghost'} colorScheme="yellow">
            Di chuyển đến trang cá nhân
          </Button>
        </Link>

        <Heading size={'xs'}>Tham chiếu ...</Heading>
      </VStack>
    </Container>
  );
};

export default PaymentSuccess;
