import {
  Avatar,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
  Link,
  Button,
  Box,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import CemaVideo from '../../assets/videos/Cema.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndCondition from '../../assets/docs//termsAndCondition';

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']}>
    <VStack>
      <Avatar boxSize={['40', '48']} />
      <Text children="Nhà sáng lập" opacity={0.7} />
    </VStack>

    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Phạm Hoài Sơn" size={['md', 'xl']} />
      <Text
        textAlign={['center', 'left']}
        children="Xin chào, mình là Phạm Hoài Sơn nhà sáng lập của trung tâm anh ngữ CEMA và đồng thời là giáo viên trực tiếp giảng dạy các khóa học tại đây."
        opacity={0.7}
      />
    </VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box>
    <video
      //   autoPlay
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      src={CemaVideo}
    ></video>
  </Box>
);

const TandC = ({ termsAndCondition }) => (
  <Box>
    <Heading
      size={'md'}
      children="Điều khoản và điều kiện"
      textAlign={['center', 'left']}
      my="4"
    />

    <Box h="sm" p="4" overflowY={'scroll'}>
      <Text
        fontFamily={'heading'}
        children={termsAndCondition}
        textAlign={['center', 'left']}
        letterSpacing={'widest'}
      />
      <Heading
        my="4"
        size={'xs'}
        children="Không hoàn tiền sau khi đã thanh toán"
        textAlign={['center', 'left']}
      />
    </Box>
  </Box>
);

const About = () => {
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="Về chúng tôi" textAlign={['center', 'left']} />
      <Founder />
      <Stack m="8" direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
          Cema English Center là một nền tảng truyền phát video với một số khóa
          học cao cấp chỉ dành cho người dùng cao cấp
        </Text>

        <Link as={RouterLink} to="/subscribe">
          <Button variant={'ghost'} colorScheme={'yellow'}>
            Đăng ký nhận thông báo
          </Button>
        </Link>
      </Stack>

      <VideoPlayer />

      <TandC termsAndCondition={termsAndCondition} />

      <HStack m="4" p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily="sans-serif"
          textTransform={'uppercase'}
          children="Thanh toán an toàn bởi VNPay"
        />
      </HStack>
    </Container>
  );
};

export default About;
