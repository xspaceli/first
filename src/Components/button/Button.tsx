import { useState } from 'react';
import MySlider from '../slider/Slider';
function ToggleComponent({ component: Component }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '关闭设置冷冻温度' : '设置冷冻温度'}
      </button>

      {show && <MySlider />}
    </>
  );
}
export default ToggleComponent;
// 使用方式:
// return
// <ToggleComponent
//   component={SomeOtherComponent}
// />
