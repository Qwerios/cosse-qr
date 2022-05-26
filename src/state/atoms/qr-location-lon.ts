import { atom } from 'recoil';

const storageKey = 'qrLon';

const qrLocationLonState = atom<string>({
  key: 'qrLocationLon',
  default: localStorage.getItem(storageKey) || '0',
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

export default qrLocationLonState;
