import { atom } from 'recoil';

const qrDataUrlState = atom<string>({
  key: 'qrDataUrl',
  default: 'https://www.cossecamperadventure.com/',
});

export default qrDataUrlState;
