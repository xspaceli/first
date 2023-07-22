// SwitchComponent.tsx



// import React from 'react';
// import { Switch } from '@mui/material';
// import { ISwitchVariable } from '../../interfaces/IMyInterface';

// interface Props {
//   variable: ISwitchVariable;
//   onChange: (variable: ISwitchVariable) => void;
// }

// const SwitchComponent: React.FC<Props> = ({ variable, onChange }) => {
//   // 原有代码
//   const handleChange = () => {
//     variable.switch = !variable.switch;
//     onChange(variable);
//   };

//   // 在handleChange内调用回调函数
//   // 无需新增处理逻辑

//   return (
//     <Switch
//       className="switch"
//       checked={variable.switch}
//       onChange={handleChange}
//     />
//   );
// };

// export default SwitchComponent;


// SwitchComponent.jsx

// import { Switch } from '@mui/material';
// import { useState } from 'react'; 

// export default function SwitchComponent({checked, onChange}) {

//   // 使用useState管理开关状态
//   const [switchState, setSwitchState] = useState(checked);

//   // 状态变化时,调用外部传入的onChange方法
//   const toggleSwitch = () => {
//     setSwitchState((prev: any) => !prev);
//     onChange(!switchState);
//   }

//   return (
//     <Switch 
//       checked={switchState}
//       onChange={toggleSwitch} 
//     />
//   );

// }
// import { Switch } from '@mui/material';
// import { useState } from 'react';

// interface Props {
//   checked: boolean;
//   onChange: (checked: boolean) => void; 
// }

// export default function SwitchComponent({ checked, onChange }: Props) {

//   const [switchState, setSwitchState] = useState(checked);

//   const toggleSwitch = () => {
//     setSwitchState(prev => !prev);
//     onChange(!switchState);
//   }

//   return (
//     <Switch
//       checked={switchState} 
//       onChange={toggleSwitch}
//     />
//   );

// }
// SwitchComponent.tsx
// import { ISwitchVariable } from "../../interfaces/IMyInterface";
// interface Props {
//   variable: ISwitchVariable; 
//   onChange: (checked: boolean) => void;
// }

// const SwitchComponent: React.FC<Props> = (props) => {

//   const { variable, onChange } = props;

//   return (
//     <div>
//        <input
//          type="checkbox"
//          checked={variable.switch}
//          onChange={(e) => onChange(e.target.checked)} 
//        />
//     </div>
//   );

// };

// export default SwitchComponent;
// SwitchComponent.tsx 

import React from 'react';
import { ISwitchVariable } from '../../interfaces/IMyInterface';

interface Props {
  variable: ISwitchVariable;
  onChange: (checked: boolean) => void;
}

const SwitchComponent: React.FC<Props> = ({variable, onChange}) => {

  return (
    <div>
      <input 
        type="checkbox"
        checked={variable.switch}
        onChange={(e) => onChange(e.target.checked)}  
      />
    </div>
  );

};

export default SwitchComponent;