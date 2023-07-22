// import SwitchComponent from '../../Components/switchComponent/SwitchComponent';

// import { Button } from "@mui/material";
// import { useState } from "react";

// import BoxControl from "../../Components/boxControl/BoxControl";
// import { ITextVariable, PermissionType } from "../../interfaces/IMyInterface";

// import { ISwitchVariable, PermissionType } from '../../interfaces/IMyInterface';

// const variable = {
//   name: 'xxx开关',
//   label: '某个开关按钮',
//   switch: false,
//   permission: PermissionType.ReadWrite,
// };

// // onChange回调函数
// const onChange = (v: ISwitchVariable) => {
//   // 更新状态
//   setSwitchState(v);

//   // 打印日志
//   console.log('Switch toggled:', v.switch);

//   // 调用API
//   updateSwitch(v);
// };

// export default function FlightArea() {
//   return (
//     <div>
//       <div>FlightArea</div>
//       <div>
//         <SwitchComponent
//           variable={variable}
//           onChange={onChange}
//         ></SwitchComponent>
//       </div>
//     </div>
//   );
// }
// // 设置开关状态
// function setSwitchState(v: ISwitchVariable) {
//   console.log('设置开关状态:', v);
// }

// // API调用
// function updateSwitch(v: ISwitchVariable) {
//   console.log('调用API保存开关状态', v);
// }

// import { useState } from 'react';
// import SwitchComponent from '../../Components/switchComponent/SwitchComponent';

// export default function FlightArea() {

//   // 使用useState初始化状态
//   const [switchState, setSwitchState] = useState(false);

//   return (
//     <div>
//       <SwitchComponent 
//         checked={switchState}
//         onChange={setSwitchState}  
//       />
//     </div>
//   )

// }


// 引入接口
// import { useState } from 'react';
// import SwitchComponent from '../../Components/switchComponent/SwitchComponent';
// import { ISwitchVariable, PermissionType } from '../../interfaces/IMyInterface';

// // 初始化变量
// const variable = {
//   name: 'xxx开关',
//   label: '某个开关按钮',
//   switch: false,
//   permission: PermissionType.ReadWrite, 
// };

// export default function FlightArea() {

//   // 在组件内部使用useState管理状态
//   const [internalState, setInternalState] = useState(variable);

//   // 在组件内部定义onChange回调函数
//   const onChange = (newState: { switch:ISwitchVariable; }) => {
    
//     // 调用设置内部状态的函数
//     setInternalState(newState);
    
//     // 打印日志
//     console.log('开关状态改变:', newState.switch);

//     // 调用API 
//     updateSwitch(newState);
//   }

//   return (
//     <div>
//       <SwitchComponent
//         variable={internalState}
//         onChange={onChange}  
//       />
//     </div>
//   )

// }

// // API调用函数
// function updateSwitch(newState: { switch: any; }) {
//   console.log('调用API保存新状态', newState); 
// }

// 引入接口
// import { useState } from 'react';
// import SwitchComponent from '../../Components/switchComponent/SwitchComponent'; 
// import { ISwitchVariable, PermissionType } from '../../interfaces/IMyInterface';

// // 初始化变量
// const variable: ISwitchVariable = {
//   name: 'xxx开关',
//   label: '某个开关按钮',
//   switch: false,
//   permission: PermissionType.ReadWrite,
// };

// export default function FlightArea() {

//   const [internalState, setInternalState] = useState<ISwitchVariable>(variable);  

//   const onChange = (newState: ISwitchVariable) => {

//     setInternalState(newState);

//     console.log('开关状态改变:', newState.switch);

//     updateSwitch(newState);

//   }

//   return (
//     <div>
//        <SwitchComponent  
//         variable={internalState}
//         onChange={onChange}
//       />
//     </div>
//   );

// }

// function updateSwitch(newState: ISwitchVariable) {
//   console.log('调用API保存新状态', newState);
// }
// import SwitchComponent from '../../Components/switchComponent/SwitchComponent';
// import { ISwitchVariable, PermissionType } from '../../interfaces/IMyInterface'; 

// const FlightArea: ISwitchVariable = {
//   name: 'test',
//   label: 'test switch',
//   switch: false,
//   permission: PermissionType.ReadWrite
// };

// // 使用组件...

// <SwitchComponent
//   variable={initState}
//   onChange={onSwitchChange} 
// />

// const onSwitchChange = (checked: boolean) => {
//   // 更新状态
// };


// Page.tsx

// import React, { useState } from 'react'; 
// import { ISwitchVariable } from './interfaces';
// import SwitchComponent from './SwitchComponent';
// import FlightArea from './FlightArea';
// import BoxControl from './../../Components/boxControl/BoxControl';

// const initState: ISwitchVariable = {
//   //...
// }; 

// const FlightArea: React.FC = () => {

//   const [variable, setVariable] = useState(initState);

//   const onChange = (checked: boolean) => {
//     setVariable({ 
//       ...variable,
//       switch: checked
//     });
//   };

//   return (
//     <div>
//        <SwitchComponent
//          variable={variable}
//          onChange={onChange}
//        />
//     </div>
//   );

// };


// export default function FlightArea() {
//   return (
//     <div>FlightArea
//       <BoxControl label={undefined} onChange={function (text: string): void {
//         throw new Error("Function not implemented.");
//       } }></BoxControl>
//     </div>
//   )
// }

// 定义label 
// const label: ITextVariable = {
//   name: 'position',
//   label: 'Current Position',
//   text: '0, 0',
//   permission: PermissionType.ReadWrite
// };

// export default function FlightArea() {

//   return (
//     <div>
//       <BoxControl  
//         label={label}
//         onChange={(_text) => {
//           // 更新位置状态
//         }}
//       />
//     </div>
//   )

// }
// import { useState } from 'react';
// import BoxControl from '../../Components/boxControl/BoxControl';

// interface IPosition {
//   x: number; 
//   y: number;
// } 

// export default function FlightArea() {

//   const [position, setPosition] = useState<IPosition>({
//     x: 0,
//     y: 0
//   });

//   const handlePositionChange = (newPosition: IPosition) => {
//     setPosition(newPosition);
//   };

//   return (
//     <div>
//       <BoxControl
//         label={{
//            name: 'pos',
//            label: 'Current Position',
//            text: `${position.x}, ${position.y}`  
//         }}
//         onChange={handlePositionChange} 
//       />
//     </div>
//   )

// }
// 接口定义
// interface Position {
//   x: number;
//   y: number;
// }

// interface Props {
//   position: Position;
//   onPositionChange: (newPosition: Position) => void;
// }

// // 组件实现
// function BoxControl(props: Props) {

//   // 状态管理
//   const [innerPosition, setInnerPosition] = useState(props.position);

//   // 上按钮点击处理
//   const handleUpClick = () => {
//     // 获取当前内部位置状态
//     const currentPosition = innerPosition;

//     // 计算新的位置坐标
//     const newY = currentPosition.y + 1;

//     // 调用setState更新内部位置状态
//     setInnerPosition({
//       ...currentPosition,
//       y: newY
//     });

//     // 调用回调函数通知外部位置变化
//     props.onPositionChange(innerPosition);
//   };

//   // 下按钮、左按钮、右按钮的点击处理逻辑
//   //...类似处理

//   return (
//     <div>
//       <button onClick={handleUpClick}>Up</button>
//       {/* <button onClick={handleDownClick}>Down</button>
//       <button onClick={handleLeftClick}>Left</button>
//       <button onClick={handleRightClick}>Right</button> */}
//     </div>
//   );
// }

// export default BoxControl;
// interface Position {
//   x: number;
//   y: number;
// }  

// interface Props {
//   position: Position;
//   onPositionChange: (newPosition: Position) => void;
// }

// function BoxControl(props: Props) {

//   // 初始化位置状态
//   const [innerPosition, setInnerPosition] = useState({
//     x: 0,
//     y: 0
//   });

//   const handleUpClick = () => {
    
//     // 获取内部状态
//     let currentPosition = innerPosition;

//     // 校验内部状态
//     if (!currentPosition) {
//       currentPosition = { x: 0, y: 0 };
//     }

//     // 计算新状态
//     let newY = currentPosition.y + 1;

//     // 更新内部状态
//     setInnerPosition({
//       ...currentPosition,
//       y: newY  
//     }); 

//     // 通知外部
//     props.onPositionChange(innerPosition);
//   };

//   // ...其他点击处理

//   return (
//     <div>
//       <Button onClick={handleUpClick}>Up</Button>
//       {/* // ...other buttons */}
//     </div>
//   );
// }

// export default BoxControl;
// import React from 'react'

export default function FlightArea() {
  return (
    <div>FlightArea</div>
  )
}
