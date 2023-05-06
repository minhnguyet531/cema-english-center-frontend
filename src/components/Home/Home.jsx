import React from 'react';
import {
  Stack,
  VStack,
  Heading,
  Text,
  Link,
  Button,
  Image,
  Box,
  HStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import './home.css';
import logoCema from '../../assets/images/vg.png';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import CemaVideo from '../../assets/videos/Cema.mp4';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
            spacing="8"
          >
            <Heading children="CONSTANT EFFORT MAKE ACHIEVEMENT" size={'2xl'} />
            <Text
              fontSize={'2xl'}
              fontFamily="cursive"
              textAlign={['center', 'left']}
              children="Dành Sự Nỗ Lực Liên Tục Để Đạt Thành Tựu"
            />
            <Link as={RouterLink} to="/courses">
              <Button size={'lg'} colorScheme="yellow">
                Tìm hiểu các khóa học
              </Button>
            </Link>
          </VStack>

          <Image
            className="vector-graphics"
            boxSize={'md'}
            src={logoCema}
            objectFit="contain"
          />
        </Stack>
      </div>

      <Box padding={'8'} bg={'blackAlpha.800'}>
        <Heading
          textAlign={'center'}
          fontFamily="body"
          color={'yellow.400'}
          children="Our brands"
        />
        <HStack
          className="brandBanner"
          justifyContent={'space-around'}
          margin-top="4"
        >
          <CgGoogle size="50px" />
          <CgYoutube size="50px" />
          <SiCoursera size="50px" />
          <SiUdemy size="50px" />
          <DiAws size="50px" />
        </HStack>
      </Box>

      <div className="container2">
        <video
          //   autoPlay
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={CemaVideo}
        ></video>
      </div>
    </section>
  );
};

export default Home;
