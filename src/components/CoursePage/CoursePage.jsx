import { Grid, Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import CemaVideo from '../../assets/videos/Cema.mp4';

const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);
  const lectures = [
    {
      _id: '1',
      title: 'Lecture 1',
      description: 'Lecture 1 description',
      video: {
        url: '',
      },
    },
    {
      _id: '2',
      title: 'Lecture 2',
      description: 'Lecture 2 description',
      video: {
        url: '',
      },
    },
    {
      _id: '3',
      title: 'Lecture 3',
      description: 'Lecture 3 description',
      video: {
        url: '',
      },
    },
    {
      _id: '4',
      title: 'Lecture 4',
      description: 'Lecture 4 description',
      video: {
        url: '',
      },
    },
    {
      _id: '5',
      title: 'Lecture 5',
      description: 'Lecture 5 description',
      video: {
        url: 'https://www.youtube.com/watch?v=7sDY4m8KNLc',
      },
    },
  ];

  return (
    <Grid minH={'90vh'} templateColumns={('1fr', '3fr 1fr')}>
      <Box>
        {' '}
        <video
          width={'100%'}
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={CemaVideo}
        ></video>
        <Heading
          m="4"
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />
        <Heading m="4" children={'Mô tả'} />
        <Text m="4" children={lectures[lectureNumber].description} />
      </Box>

      <VStack>
        {lectures.map((lecture, index) => (
          <Button
            onClick={() => setLectureNumber(index)}
            key={lecture._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: 0,
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
          >
            <Text>
              {' '}
              #{index + 1} {lecture.title}
            </Text>
          </Button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
