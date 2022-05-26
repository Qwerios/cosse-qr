import { selector } from 'recoil';
import qrLocationLatState from '../atoms/qr-location-lat';
import qrLocationLonState from '../atoms/qr-location-lon';

// Location URL for google maps:
// http://maps.google.com/maps?q=[LAT],[LON]
//
const qrDataLocationState = selector<string|undefined>({
  key: 'qrDataLocation',
  get: ({get}) => {
    const lat = parseFloat(get(qrLocationLatState));
    const lon = parseFloat(get(qrLocationLonState));

    if (isNaN(lat) || isNaN(lon)) {
      return;
    }

    return `https://maps.google.com/maps?q=${lat},${lon}`;

  },
});

export default qrDataLocationState;
