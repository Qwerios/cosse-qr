import { atom } from 'recoil';

const qrSizeState = atom<number>({
  key: 'qrSize',
  default: 250,
});

export default qrSizeState;
