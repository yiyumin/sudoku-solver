import {
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text
} from '@chakra-ui/react';

type SliderControlProps = {
  solveSpeed: number,
  setSpeed: (sps: number) => void
};

const SliderControl = ({ solveSpeed, setSpeed }: SliderControlProps) => (
  <Flex width='100%'>
    <Text mr='5' color='white' fontWeight='bold'>Speed:</Text>
    <Slider min={1} max={100} defaultValue={solveSpeed} onChangeEnd={(speed) => setSpeed(speed)}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  </Flex>
);

export default SliderControl;
