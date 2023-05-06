import React, { useState } from 'react';
import {
  Button,
  Container,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
  Image,
  Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize="60" objectFit="contain" />
      <Heading
        textAlign={['center', 'left']}
        children={title}
        maxW="200px"
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
      />
      <Text children={description} noOfLines={2} />

      <HStack>
        <Text
          children={'Giảng viên'}
          fontWeight={'bold'}
          textTransform={'uppercase'}
        />
        <Text
          fontFamily={'body'}
          children={creator}
          textTransform={'uppercase'}
        />
      </HStack>

      <Heading
        textAlign={'center'}
        size="xs"
        children={`Tổng bài học: ${lectureCount}`}
      />

      <Heading
        textAlign={'center'}
        size="xs"
        children={`Tổng lượt xem: ${views}`}
      />

      <Stack direction={['column', 'row']} alignItems="center">
        <Link as={RouterLink} to={`/course/${id}`}>
          <Button colorScheme="yellow">Xem chi tiết</Button>
        </Link>
        <Button
          variant={'ghost'}
          colorScheme="yellow"
          onClick={() => addToPlaylistHandler(id)}
        >
          Thêm vào danh sách
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyWord] = useState('');
  const [category, setCategory] = useState('');
  const categories = ['Tất cả', 'Chuyên đề ngữ pháp', 'Rèn từ vựng', 'Ôn tủ'];

  const addToPlaylistHandler = () => {
    console.log('add to playlist');
  };

  return (
    <Container minH={'95vh'} maxH="container.lg" paddingY="8">
      <Heading children="Tất cả khóa học" m="8" />
      <Input
        value={keyword}
        onChange={e => setKeyWord(e.target.value)}
        placeholder="Tìm kiếm khóa học..."
        type="text"
        focusBorderColor="yellow.500"
      />

      <HStack
        overflowX={'auto'}
        paddingY="8"
        css={{ '&::-webkit-scrollbar': { display: 'none' } }}
      >
        {categories.map((category, index) => (
          <Button key={index} onClick={() => setCategory(category)} minW={'60'}>
            <Text children={category} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      ></Stack>

      <Course
        title={'Sampel'}
        description={'Sampel'}
        views={23}
        imageSrc={
          'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/280658351_536275437889030_2924418372694429149_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZzTg03etsawAX--jpfN&_nc_ht=scontent.fhan2-3.fna&oh=00_AfBtZk9pj6Uw_QCYyVKSLuDYgkgPvLFGj0R9mFDGCWnrNA&oe=6457EAB2'
        }
        id={'Sampel'}
        creator={'Sampel'}
        lectureCount={2}
        addToPlaylistHandler={addToPlaylistHandler}
      />
    </Container>
  );
};

export default Courses;
