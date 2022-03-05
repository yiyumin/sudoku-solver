import { Text } from '@chakra-ui/react';

import Media from '../Media';

import randomBoardWebm from '../../../assets/videos/random_board.webm';
import randomBoardMp4 from '../../../assets/videos/random_board.mp4';

const RandomBoard = () => (
  <>
    <Text>
      Alternatively, click on 'Random Board' to have the application generate a
      board for you.
    </Text>
    <Media>
      <Media.Gif>
        <Media.GifSource src={randomBoardWebm} type='video/webm' />
        <Media.GifSource src={randomBoardMp4} type='video/mp4' />
      </Media.Gif>
    </Media>
  </>
);

export default RandomBoard;
