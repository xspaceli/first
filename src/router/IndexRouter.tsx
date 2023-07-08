import { Route, Routes, HashRouter, Navigate } from 'react-router-dom';
import ConnectionBoot from '../views/connectionBoot/ConnectionBoot';
import Djschool from '../views/djSchool/DjsSchool';
import FlightArea from '../views/flightArea/FlightArea';
import MySettings from '../views/mySettings/MySettings';
import PhotoAlbum from '../views/photoAlbum/PhotoAlbum';
import SkyCity from '../views/skyCity/SkyCity';
import HomePage from '../views/homePage/HomePage';
import App from '../App';

// 这个路径报错没事，是修改文件名导致的

export default function IndexRounter() {
  return (
    <HashRouter>
      <Routes>
      

        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/app" element={<App></App>}></Route>
        <Route path="/djschool" element={<Djschool></Djschool>}></Route>
        <Route path="/flightarea" element={<FlightArea></FlightArea>}></Route>
        <Route path="/mysettings" element={<MySettings></MySettings>}></Route>
        <Route path="/photoalum" element={<PhotoAlbum></PhotoAlbum>}></Route>
        <Route
          path="/connectionboot"
          element={<ConnectionBoot></ConnectionBoot>}
        ></Route>
        <Route path="/skycity" element={<SkyCity></SkyCity>}></Route>
        {/* 回头查查这个replace属性 */}
        <Route path="*" element={<Navigate to={'/'} replace />}></Route>
      </Routes>
    </HashRouter>
  );
}
