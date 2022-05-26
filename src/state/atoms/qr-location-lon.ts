import { atom } from 'recoil';

const qrLocationLonState = atom<string>({
  key: 'qrLocationLon',
  default: '0',
});

export default qrLocationLonState;
