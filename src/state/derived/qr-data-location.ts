import { atom } from 'jotai';
import qrLocationLatState from '../atoms/qr-location-lat';
import qrLocationLonState from '../atoms/qr-location-lon';

// Location URL for google maps:
// https://maps.google.com/maps?q=[LAT],[LON]
//
const qrDataLocationState = atom<string | undefined>((get) => {
  const lat = parseFloat(get(qrLocationLatState));
  const lon = parseFloat(get(qrLocationLonState));

  // Returning undefined lets the components show a placeholder until both
  // coordinates are valid numbers.
  if (isNaN(lat) || isNaN(lon)) {
    return;
  }

  return `https://maps.google.com/maps?q=${lat},${lon}`;
});

export default qrDataLocationState;

