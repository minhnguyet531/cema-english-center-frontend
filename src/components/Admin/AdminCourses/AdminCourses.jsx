import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
// import curror from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';

const AdminCourses = () => {
  const courses = [
    {
      _id: 1,
      title: 'Khóa chuyên đề ngữ pháp',
      poster: {
        url: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/280658351_536275437889030_2924418372694429149_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZzTg03etsawAX--jpfN&_nc_ht=scontent.fhan2-3.fna&oh=00_AfBtZk9pj6Uw_QCYyVKSLuDYgkgPvLFGj0R9mFDGCWnrNA&oe=6457EAB2',
      },
      category: 'Khóa chuyên đề ngữ pháp',
      createBy: 'Ming Ming',
      price: 100,
      views: 100,
      numOfVideos: 10,
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();

  const courseDetailHandler = user_id => {
    // console.log(user_id);
    onOpen();
  };

  const deleteButtonHandler = user_id => {
    console.log(user_id);
  };

  const deleteLectureButtonHandler = (courseId, lectureId) => {
    console.log(lectureId);
    console.log(courseId);
  };

  const addLectureHandler = (e, courseId, title, description, video) => {
    e.preventDefault();
  };

  return (
    <Grid
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
      //   css={{ cursor: `url(${curror}), default` }}
    >
      <Box p={['0', '16']} overflowX={'auto'}>
        <Heading
          textTransform={'uppercase'}
          children="All courses"
          my="16"
          textAlign={['center', 'left']}
        />

        <TableContainer w={['100vw', 'full']}>
          <Table>
            <TableCaption>All avaible courses in the database</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Created by</Th>
                <Th isNumeric>Price</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Number of videos</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map(item => (
                <Row
                  key={item._id}
                  item={item}
                  courseDetailHandler={courseDetailHandler}
                  deleteButtonHandler={deleteButtonHandler}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <CourseModal
          id={1}
          isOpen={isOpen}
          onClose={onClose}
          deleteButtonHandler={deleteLectureButtonHandler}
          addLectureHandler={addLectureHandler}
          courseTitle={'Khóa chuyên đề ngữ pháp'}
        />
      </Box>

      <Sidebar />
    </Grid>
  );
};

export default AdminCourses;

function Row({ item, courseDetailHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createBy}</Td>
      <Td isNumeric>{item.price}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>

      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => courseDetailHandler(item._id)}
            variant={'outline'}
            color="purple.500"
          >
            View lectures
          </Button>
          <Button
            onClick={() => deleteButtonHandler(item._id)}
            color={'purple.600'}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
