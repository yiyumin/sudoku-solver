import { Text } from '@chakra-ui/react';

import Media from '../Media';

import inputWebm from '../../../assets/videos/input.webm';
import inputMp4 from '../../../assets/videos/input.mp4';

const HowToInput = () => (
  <>
    <Text>
      Start by entering digits into the board. Click on a cell and enter a digit
      between 1 and 9.
    </Text>

    <Media>
      <Media.Gif>
        <Media.GifSource src={inputWebm} type='video/webm' />
        <Media.GifSource src={inputMp4} type='video/mp4' />
      </Media.Gif>
    </Media>

    <Text fontSize='xs' color='tomato'>
      *Digits may not be duplicated across any row, column, or region.
    </Text>
  </>
);

export default HowToInput;
