

// export default function Temperature() {
//   return (
//     <div>Temperature</div>
//   )
// }

import ToggleComponent from '../../Components/button/Button';

import MySlider from "../../Components/slider/Slider"
export default function Temperature()  {
  return <ToggleComponent component={MySlider} />
}
