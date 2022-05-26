import { atom } from 'recoil';

const storageKey = 'qrSize';

const fetchStoredValue = () => {
  const storedValue = parseInt(localStorage.getItem(storageKey) || '', 10);
  if (isNaN(storedValue)) {
    return 250;
  }
  return storedValue;
}

const qrSizeState = atom<number>({
  key: 'qrSize',
  default: fetchStoredValue(),
  effects: [
    ({ onSet, setSelf }) => {
      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(storageKey)
          : localStorage.setItem(storageKey, `${newValue}`);
      });

      if (window.addEventListener) {
        window.addEventListener('storage', (storageEvent) => {
          if (storageEvent.key === storageKey) {
            const newValue = parseInt( storageEvent.newValue || '', 10);
            if (!isNaN(newValue) && newValue > 0) {
              setSelf(newValue);
            }
          }
        });
      }
    },
  ],  
});

export default qrSizeState;
