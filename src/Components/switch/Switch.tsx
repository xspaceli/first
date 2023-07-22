// // import React from 'react';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
// import { useState } from 'react';

// interface SwitchItem {
//   name: string;
//   label: string;
//   checked: boolean;
// }
// const initialSwitches: SwitchItem[] = [
//   {
//     name: 'checkedA',
//     label: '相机',
//     checked: true
//   }
// ];

// export default function SwitchLabels() {

//   const [switches, setSwitches] = useState<SwitchItem[]>(() => {
//     return initialSwitches;
//   });

//   const handleChange = (event) => {
//     setSwitches({
//       ...switches,
//       [event.target.name]: event.target.checked,
//     });
//   };

//   return (
//     <FormGroup row>
//       <FormControlLabel
//         control={
//           <Switch
//             checked={switches[0].checked}
//             onChange={handleChange}
//             name={switches[0].name}
//           />
//         }
//         label={switches[0].label}
//       />
//     </FormGroup>
//   );
// }
import { useState } from 'react';

interface SwitchItem {
  name: string;
  label: string;
  checked: boolean;
}

function useSwitches(initial: SwitchItem[]) {
  const [switches, setSwitches] = useState(initial);

  function toggle(index: number) {
    setSwitches((prev) => {
      return prev.map((item, i) => {
        if (i === index) {
          return { ...item, checked: !item.checked };
        } else {
          return item;
        }
      });
    });
  }

  return {
    switches,
    toggle,
  };
}

export default function Switches() {
  const initial: SwitchItem[] = [
    { name: '摄像机开关', label: 'Switch A ', checked: false },
    // {name: 'b', label: 'Switch B', checked: true},
  ];

  const { switches, toggle } = useSwitches(initial);

  return (
    <div>是否选中摄像机
      {switches.map((item, index) => (
        <Switch
          key={item.name}
          checked={item.checked}
          onChange={() => toggle(index)}
          name={item.name}
        />
      ))}
    </div>
  );
}
