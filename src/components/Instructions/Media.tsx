import { Box, Image } from '@chakra-ui/react';

import emptyBoardImage from '../../assets/images/empty_board.webp';

type MediaProps = {
  children: React.ReactNode;
};

const Media = ({ children }: MediaProps) => {
  return <Box w={['95%', '70%']}>{children}</Box>;
};

type MediaImageProps = {
  src: string;
  alt: string;
};

const MediaImage = ({ src, alt }: MediaImageProps) => {
  return <Image w='100%' src={src} alt={alt} />;
};

type MediaGifProps = {
  children: React.ReactNode;
};

const MediaGif = ({ children }: MediaGifProps) => {
  return (
    <video autoPlay loop muted playsInline poster={emptyBoardImage}>
      {children}
      <p>Your browser cannot play the provided video file.</p>
    </video>
  );
};

type MediaGifSourceProps = {
  src: string;
  type: string;
};

const MediaGifSource = (props: MediaGifSourceProps) => <source {...props} />;

Media.Image = MediaImage;
Media.Gif = MediaGif;
Media.GifSource = MediaGifSource;

export default Media;
