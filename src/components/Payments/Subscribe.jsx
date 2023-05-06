import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const Subscribe = () => {
  return (
    <Container h="90vh" p="16">
      <Heading children="Anh ngữ CEMA" my="8" textAlign={'center'} />

      <VStack
        boxShadow={'lg'}
        alignItems="stretch"
        borderRadius={'lg'}
        spacing="0"
      >
        <Box
          bg="yellow.400"
          p={'4'}
          css={{
            borderRadius: '8px 8px 0 0',
          }}
        >
          <Text children={'Khóa chuyên đề ngữ pháp - 799K'} />
        </Box>

        <Box p="4">
          <VStack textAlign={'center'} px="8" mt={'4'} spacing="8">
            <Text
              children={
                'Giảm giá cho học viên đăng ký trong 1 tuần đầu tiên (18/5/2022- 25/5/2022)'
              }
            />
            <Heading size="md" children={'Giá chỉ còn 699K'} />
          </VStack>

          <Button my="8" w="full" colorScheme="yellow">
            Mua ngay
          </Button>
        </Box>

        <Box
          bg="blackAlpha.600"
          p="4"
          css={{
            borderRadius: '0 0 8px 8px',
          }}
        >
          <Heading
            size="sm"
            children={'Khóa học kéo dài 17 tuần'}
            color={'white'}
            textTransform={'uppercase'}
          />

          <Text
            fontSize={'xs'}
            color="white"
            children={'Tài liệu đầy đủ, cập nhật liên tục'}
          />
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
