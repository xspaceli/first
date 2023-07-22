import React, { useState, ChangeEvent } from 'react';
import {
  Select,
  MenuItem,
  SelectChangeEvent,
  TextField,
  Button,
} from '@mui/material';
import axios from 'axios';

interface FormData {
  duration: string;
  customDuration: number;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    duration: '30',
    customDuration: 30,
  });

  const handleDurationChange = (event: SelectChangeEvent) => {
    setFormData({
      ...formData,
      duration: event.target.value,
    });
  };

  const handleCustomChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      customDuration: Number(event.target.value),
    });
  };
  // 提交submit到后端api
  // const handleSubmit = async () => {
  //   try {
  //     await axios.post('ws://203.104.35.186:7999/ws/indi_client/', formData);
  //   } catch (error) {
  //     // 处理错误
  //   }
  // };
  const handleSubmit = async () => {

    try {
      const response = await axios.post('ws://203.104.35.186:7999/ws/indi_client/', formData);
      
      // 打印接口响应数据
      console.log(response.data);
  
    } catch (error) {
      console.error(error); 
    }
  
  };

  return (
    <>
      <ShootingDurationSelect
        duration={formData.duration}
        onChange={handleDurationChange}
      />

      <CustomDurationInput
        customDuration={formData.customDuration}
        onChange={handleCustomChange}
      />

      <Button variant="contained" onClick={handleSubmit}>
        提交
      </Button>
    </>
  );
};

// 拍摄时长选择组件
const ShootingDurationSelect: React.FC<{
  duration: string;
  onChange: (event: SelectChangeEvent) => void;
}> = ({ duration, onChange }) => {
  return (
    <Select value={duration} onChange={onChange}>
      <MenuItem value="30">30分钟</MenuItem>
      <MenuItem value="60">60分钟</MenuItem>
      <MenuItem value="custom">自定义</MenuItem>
    </Select>
  );
};

// 自定义时长输入组件
const CustomDurationInput: React.FC<{
  customDuration: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}> = ({ customDuration, onChange }) => {
  return <TextField value={customDuration} onChange={onChange} />;
};

export default App;
