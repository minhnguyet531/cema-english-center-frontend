import React from 'react';
import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import {
  TiSocialYoutubeCircular,
  TiSocialFacebookCircular,
} from 'react-icons/ti';

const Footer = () => {
  return (
    <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children="Đã đăng ký bản quyền" color={'white'} />
          <Heading
            fontFamily={'body'}
            size="sm"
            children="@Cema english center"
            color={'yellow.400'}
          />
        </VStack>

        <HStack
          spacing={['2', '10']}
          justifyContent="center"
          color={'white'}
          fontSize={'50'}
        >
          <a href="https://www.youtube.com/@CEMAGroup2020" target={'blank'}>
            <TiSocialYoutubeCircular />
          </a>
          <a href="https://www.facebook.com/CEMAGroup2020" target={'blank'}>
            <TiSocialFacebookCircular />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
