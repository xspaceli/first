import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
// interface INumberVariable {
//   name: string;
//   label: string;
//   value: number;
//   max: number;
//   min: number;
// }
interface IMarkObject {
  value: number;
  label: string;
}
interface ISliderProps {
  onSubmit: (value: number) => void;
}
function valuetext(value) {
  return `${value}°C`;
}

const marks: IMarkObject[] = [
  { value: 0, label: '0°C' },
  { value: 20, label: '20°C' },
  { value: 37, label: '37°C' },
  { value: 100, label: '100°C' },
];

const MySlider: React.FC<ISliderProps> = ({ onSubmit }) => {
  const [sliderValue, setSliderValue] = useState(80);

  const handleSubmit = () => {
    onSubmit(sliderValue);
  };

  return (
    <>
      <Typography id="discrete-slider-always" gutterBottom>
        冷冻温度条
      </Typography>
      <Slider
        value={sliderValue}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={0.1}
        marks={marks}
        valueLabelDisplay="on"
        onChange={(e, newValue) => setSliderValue(newValue)}
      />

      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default MySlider;
