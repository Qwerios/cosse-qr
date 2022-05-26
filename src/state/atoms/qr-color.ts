import { atom } from 'recoil';

const storageKey = 'qrColor';

const qrColorState = atom<string>({
  key: 'qrColor',
  default: localStorage.getItem(storageKey) || '#60a72e',
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

export default qrColorState;
