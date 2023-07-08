// 导入样式
import './App.css';
// 导入mui 组件
import Button from '@mui/material/Button';
// 导入icon图标
import AddLocationIcon from '@mui/icons-material/AddLocation';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
// 引入自定义调色板
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function App() {
  return (
    <div>
      {/* 自定义调色板 */}
      <ThemeProvider theme={theme}>
        {' '}
        {/* 左上角 */}
        <div className="leftTop">
          {' '}
          <Button color="secondary" href="/#/flightarea">
            <AddLocationIcon></AddLocationIcon> &nbsp;飞行区 &nbsp; | &nbsp;
            附近航拍点
          </Button>
        </div>
        {/* 左下角 */}
        <div className="leftBottom">
          {' '}
          <Button color="secondary" href="/#/photoalum">
            <PhotoLibraryIcon></PhotoLibraryIcon>&nbsp; 相册
          </Button>
          <Button color="secondary" href="/#/skycity">
            {' '}
            <ApartmentOutlinedIcon></ApartmentOutlinedIcon> &nbsp;天空之城
          </Button>
          <Button color="secondary" href="/#/mysettings">
            <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>&nbsp;我的
          </Button>
        </div>
        {/* 右上角 */}
        <div className="rightTop">
          <Button href="/#/djschool" color="secondary">
            <AutoStoriesIcon></AutoStoriesIcon>
            &nbsp;&nbsp;&nbsp;大疆学堂
          </Button>
        </div>
        {/* 右下角 */}
        <div className="rightBottom">
          <Button
            href="/#/connectionboot"
            color="secondary"
            variant="outlined"
            className="button_connect"
          >
            连接引导
          </Button>
        </div>
        {/* 测试区 */}
      </ThemeProvider>
    </div>
  );
}

// 调色板

const theme = createTheme({
  palette: {
    // primary: {
    //   // Purple and green play nicely together.
    //   main: purple[500],
    // },
    secondary: {
      // This is green.A700 as hex.
      main: '#ffffff',
    },
  },
});
