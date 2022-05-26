import { atom } from 'recoil';

const qrLocationLatState = atom<string>({
  key: 'qrLocationLat',
  default: '0',
});

export default qrLocationLatState;
