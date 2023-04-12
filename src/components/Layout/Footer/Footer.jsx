import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';
const Footer = () => {
  return (
    <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children="All Rights Reserved" color={'white'} />
          <Heading
            fontFamily={'body'}
            size="sm"
            children="@ProgrammerBuddy"
            color={'yellow.400'}
          />
        </VStack>

        <HStack
          spacing={['2', '10']}
          justifyContent="center"
          color={'white'}
          fontSize="50"
        >
          {/* if target="_blank" used when somebody clicks new tab opened everytime*/}
            {/* target blank so that when somebody clicks new tab opened and if again clickthen 
            link opened in same new tab*/}

          <a href="https://youtube.com/" target={'blank'}>
            <TiSocialYoutubeCircular />
          </a>
          <a href="https://instagram.com/naman._jain_" target={'blank'}>
            <TiSocialInstagramCircular />
          </a>
          <a href="https://github.com/naman21-web" target={'blank'}>
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;

