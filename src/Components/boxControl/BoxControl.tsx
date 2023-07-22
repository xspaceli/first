// // interfaces.ts 
// export interface ITextVariable {
//   name: string;
//   label: string;
//   text: string;
// }

// export interface IVariableBase {
//   permission: string; 
// }

// BoxControl.tsx
import { Button } from '@mui/material';
import { ITextVariable } from '../../interfaces/IMyInterface';

interface IProps {
  label: ITextVariable;
  onChange: (text: string) => void;
}

const BoxControl: React.FC<IProps> = ({ 
  label,
  onChange  
}) => {

  const handleUpClick = () => {
    onChange('up');
  };
  
  const handleDownClick = () => {
    onChange('down');
  };

  // 其他方向的按钮及点击处理

  return (
    <div>
      <div>{label.text}</div> 
      <Button onClick={handleUpClick}>Up</Button>
      <Button onClick={handleDownClick}>Down</Button>
    </div>
  );
}
export default BoxControl;