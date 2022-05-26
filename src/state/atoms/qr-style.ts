import { atom } from 'recoil';

const storageKey = 'qrStyle';

const fetchStoredValue = () => {
  const storedValue = localStorage.getItem(storageKey);
  switch (storedValue) {
    case 'dots': return 'dots';
    case 'squares': return 'squares';
    default: return 'dots';
  }
}

const qrStyleState = atom<'dots'|'squares'>({
  key: 'qrStyle',
  default: fetchStoredValue(),
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
            setSelf(storageEvent.newValue === 'squares' ? 'squares' : 'dots');
          }
        });
      }
    },
  ],  
});

export default qrStyleState;
