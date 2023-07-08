
// export default function ceshi() {
//   return (
//     <div>ceshi</div>
//   )
// }

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(position => {
//     const { latitude, longitude } = position.coords;
//     alert(`Latitude: ${latitude} Longitude: ${longitude}`);  
//   });
// } else {
//   alert("Geolocation is not supported!");
// }


import  { useState } from 'react';


function Ceshi() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      });
    }
  }

  return (
    <div>
      <button onClick={getLocation}>获取定位</button>
      {lat && <p>纬度:{lat}</p>}
      {lng && <p>经度:{lng}</p>}
    </div>
  );
}

export default Ceshi;