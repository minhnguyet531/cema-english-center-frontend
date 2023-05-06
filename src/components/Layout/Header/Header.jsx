import React from 'react';
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  VStack,
  Link,
  HStack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import { RiMenu5Fill, RiLogoutBoxLine, RiDashboardFill } from 'react-icons/ri';
import { Link as RouterLink } from 'react-router-dom';

const LinkButton = ({
  url = '/',
  title = 'Trang chủ',
  onClose,
  RouterLink,
}) => {
  console.log(url);
  return (
    <Link as={RouterLink} onClick={onClose} to={url}>
      <Button variant={'ghost'}>{title}</Button>
    </Link>
  );
};

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = false;
  const user = {
    role: 'admin',
  };

  const logoutHandler = () => {
    console.log('logout');
    onClose();
  };

  return (
    <>
      <ColorModeSwitcher justifySelf="flex-end" />
      <Button
        onClick={onOpen}
        colorScheme={'yellow'}
        width="12"
        height={'12'}
        rouded="full"
        zIndex={'overlay'}
        position={'fixed'}
        top="6"
        left="6"
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>
            Trung tâm anh ngữ Cema
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'} alignItems="flex-start">
              <LinkButton
                onClose={onClose}
                RouterLink={RouterLink}
                url="/"
                title="Trang chủ"
              />
              <LinkButton
                onClose={onClose}
                RouterLink={RouterLink}
                url="/courses"
                title="Khóa học"
              />

              <LinkButton
                onClose={onClose}
                RouterLink={RouterLink}
                url="/blog"
                title="Tin tức"
              />
              <LinkButton
                onClose={onClose}
                RouterLink={RouterLink}
                url="/support"
                title="Chat GPT"
              />
              <LinkButton
                onClose={onClose}
                RouterLink={RouterLink}
                url="/contact"
                title="Liên hệ"
              />
              <LinkButton
                onClose={onClose}
                RouterLink={RouterLink}
                url="/about"
                title="Về chúng tôi"
              />

              <HStack
                justifyContent={'space-evenly'}
                position="absolute"
                bottom={'2rem'}
                width="80%"
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link as={RouterLink} to="/profile">
                          <Button
                            onClick={onClose}
                            variant={'ghost'}
                            colorScheme={'yellow'}
                          >
                            Trang cá nhân
                          </Button>
                        </Link>
                        <Link as={RouterLink} to="/logout">
                          <Button variant={'ghost'} onClick={logoutHandler}>
                            <RiLogoutBoxLine />
                            Đăng xuất
                          </Button>
                        </Link>
                      </HStack>

                      {user && user.role === 'admin' && (
                        <Link as={RouterLink} to="/admin/dashboard">
                          <Button
                            onClick={onClose}
                            colorScheme={'purple'}
                            variant="ghost"
                          >
                            <RiDashboardFill style={{ margin: '4px' }} />
                            Quản trị
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link as={RouterLink} onClick={onClose} to="/login">
                      <Button colorScheme={'yellow'}>Đăng nhập</Button>
                    </Link>

                    <p>Hoặc</p>

                    <Link as={RouterLink} onClick={onClose} to="/register">
                      <Button colorScheme={'yellow'}>Đăng ký</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
