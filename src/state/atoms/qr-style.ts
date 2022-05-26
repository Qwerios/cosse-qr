import { atom } from 'recoil';

const qrStyleState = atom<'dots'|'squares'>({
  key: 'qrStyle',
  default: 'dots',
});

export default qrStyleState;
