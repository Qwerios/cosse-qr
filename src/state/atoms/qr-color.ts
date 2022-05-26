import { atom } from 'recoil';

const qrColorState = atom<string>({
  key: 'qrColor',
  default: '#60a72e',
});

export default qrColorState;
