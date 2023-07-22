import { useState } from 'react';
// interface ITextVariable {
//   name: string;
//   label: string;
//   text: string; 
// }

// function Telescope1() {

//   const [text, setText] = useState('');

//   const handleButtonClick = (direction) => {
//     setText(direction);
//     console.log(direction);
//   }

//   return (
//     <div>
//       <button onClick={() => handleButtonClick('东')}>东</button>
//       <button onClick={() => handleButtonClick('南')}>南</button>
//       <button onClick={() => handleButtonClick('西')}>西</button>
//       <button onClick={() => handleButtonClick('北')}>北</button>
//     </div>
//   );

// }

// export default Telescope1;
// 接口
interface ITextVariable {
  name: string;
  label: string;
  text: string;
}

// 测试数据  
// const testData: ITextVariable = {
//   name: 'Direction',
//   label: 'East',
//   text: '东'
// };

// 模拟API函数
async function mockApi(data: ITextVariable) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(data);
      
      resolve({ status: 'ok' });  
    }, 500);
  });
}

// 组件
function Telescope() {

  const [text, setText] = useState('');

  const handleClick = async (dir: string) => {

    const reqData: ITextVariable = {
      name: 'Direction',
      label: dir,
      text: dir 
    };
    
    const res = await mockApi(reqData);
    console.log(res);

  }

  return (
    <div>
      <button onClick={() => handleClick('东')}>东</button>
      <button onClick={() => handleClick('南')}>南</button>
      <button onClick={() => handleClick('西')}>西</button>
      <button onClick={() => handleClick('北')}>北</button>
    </div>
  );

}

export default Telescope;