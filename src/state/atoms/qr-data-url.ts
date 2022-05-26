import { atom } from 'recoil';

const storageKey = 'qrUrl';

const qrDataUrlState = atom<string>({
  key: 'qrDataUrl',
  default: localStorage.getItem(storageKey) || 'https://www.cossecamperadventure.com',
  effects: [
    ({ onSet, setSelf }) => {
      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(storageKey)
          : localStorage.setItem(storageKey, newValue);
      });

      if (window.addEventListener) {
        window.addEventListener('storage', (storageEvent) => {
          if (storageEvent.key === storageKey) {
            setSelf(storageEvent.newValue ? storageEvent.newValue : '');
          }
        });
      }
    },
  ],  
});

export default qrDataUrlState;
