import {
  Input,
  Container,
  Grid,
  Heading,
  VStack,
  Select,
  Image,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
// import curror from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
import { fileUploadCss } from '../../Auth/Register';

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [linkDocument, setLinkDocument] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const categories = ['Tất cả', 'Chuyên đề ngữ pháp', 'Rèn từ vựng', 'Ôn tủ'];

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };
  return (
    <Grid
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
      //   css={{ cursor: `url(${curror}), default` }}
    >
      <Container>
        <form>
          <Heading
            textTransform={'uppercase'}
            children="Create course"
            my="16"
            textAlign={['center', 'left']}
          />
          <VStack m="auto" spacing={'8'}>
            <Input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Title"
              type="text"
              focusBorderColor="purple.300"
            />
            <Input
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="description"
              type="text"
              focusBorderColor="purple.300"
            />
            <Input
              value={linkDocument}
              onChange={e => setLinkDocument(e.target.value)}
              placeholder="linkDocument"
              type="text"
              focusBorderColor="purple.300"
            />
            <Select
              focusBorderColor="purple.300"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value="">Category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </Select>

            <Input
              accept="image/*"
              required
              id="chooseAvatar"
              type="file"
              focusBorderColor="purple.500"
              css={{
                '&::file-selector-button': {
                  ...fileUploadCss,
                  color: 'purple',
                },
              }}
              onChange={changeImageHandler}
            />

            {imagePrev && (
              <Image
                src={imagePrev}
                alt="avatar"
                boxSize="64"
                objectFit={'contain'}
              />
            )}
            <Button w="full" colorScheme="purple" type="submit">
              Create
            </Button>
          </VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  );
};

export default CreateCourse;
