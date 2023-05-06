import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  VStack,
  Text,
  Link,
  Image,
  ModalContent,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  ModalHeader,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { Link as RouterLink } from 'react-router-dom';
import { fileUploadCss } from '../Auth/Register';

const Profile = () => {
  const user = {
    name: 'Nguyễn Văn A',
    email: 'mingming@gmail.com',
    phone: '0123456789',
    role: 'user',
    subscription: {
      status: 'active',
    },
    playlist: [
      {
        course: '123456789',
        poster:
          'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/280658351_536275437889030_2924418372694429149_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZzTg03etsawAX--jpfN&_nc_ht=scontent.fhan2-3.fna&oh=00_AfBtZk9pj6Uw_QCYyVKSLuDYgkgPvLFGj0R9mFDGCWnrNA&oe=6457EAB2',
      },
    ],
  };

  const removeFromPlaylistHandler = id => {
    console.log(id);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const changeImageSubmitHandler = (e, image) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <Container minH={'90vh'} maxW="container.lg" py="8">
      <Heading children="Trang cá nhân" m="8" textTransform={'uppercase'} />

      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        padding="8"
      >
        <VStack>
          <Avatar boxSize={'48'} />
          <Button onClick={onOpen} variant={'ghost'} colorScheme="yellow">
            Đổi ảnh đại diện
          </Button>
        </VStack>

        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children={'Họ và tên'} fontWeight={'bold'} />
            <Text children={user.name} />
          </HStack>
          <HStack>
            <Text children={'Email'} fontWeight={'bold'} />
            <Text children={user.email} />
          </HStack>
          <HStack>
            <Text children={'Số điện thoại'} fontWeight={'bold'} />
            <Text children={user.phone} />
          </HStack>
          {user.role !== 'admin' && (
            <HStack>
              <Text children={'Tình trạng tài khoản'} fontWeight={'bold'} />
              {user.subscription.status === 'active' ? (
                <Button color={'yellow.500'} variant="unstyled">
                  Khóa tài khoản
                </Button>
              ) : (
                <Link as={RouterLink} to="/subcripbe">
                  <Button colorScheme="yellow">Các khóa học đăng ký</Button>
                </Link>
              )}
            </HStack>
          )}
          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to="/updateprofile">
              <Button>Cập nhật trang cá nhân</Button>
            </Link>

            <Link to="/changepassword">
              <Button>Thay đổi mật khẩu</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>

      <Heading children="Playlist" size={'md'} m="8" />
      {user.playlist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap={'wrap'}
          p="4"
        >
          {user.playlist.map((element, index) => (
            <VStack w="48" m="2" key={element.course}>
              <Image
                boxSize="full"
                objectFit="contain"
                src={element.poster}
                alt={element.course}
              />
              <HStack>
                <Link
                  as={RouterLink}
                  to={`/course/${element.course}`}
                  key={index}
                >
                  <Button variant={'ghost'} colorScheme={'yellow'}>
                    Xem ngay
                  </Button>
                </Link>
                <Button
                  onClick={() => removeFromPlaylistHandler(element.course)}
                >
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}

      <ChangePhotoBox
        changeImageSubmitHandler={changeImageSubmitHandler}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Container>
  );
};

export default Profile;

function ChangePhotoBox({ isOpen, onClose, changeImageSubmitHandler }) {
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState('');
  const changeImage = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const closeHandler = () => {
    setImage('');
    setImagePrev('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={'blur(10px)'} />
      <ModalContent>
        <ModalHeader children="Đổi ảnh đại diện" />
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={e => changeImageSubmitHandler(e, image)}>
              <VStack spacing={'8'}>
                {imagePrev && <Avatar boxSize={'48'} src={imagePrev} />}
                <Input
                  type="file"
                  css={{
                    '&::file-selector-button': fileUploadCss,
                  }}
                  onChange={changeImage}
                />

                <Button w="full" colorScheme={'yellow'} type="submit">
                  Đổi ảnh đại diện
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button mr="3" onClick={closeHandler}>
            Đóng
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
