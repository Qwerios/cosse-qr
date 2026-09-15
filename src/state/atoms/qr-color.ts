import { atomWithStorage } from 'jotai/utils';
import { rawStringStorage } from '../raw-local-storage';

const storageKey = 'qrColor';

// getOnInit reads localStorage while the atom is created rather than after the
// first render, so the stored colour is applied without a flash of the default.
const qrColorState = atomWithStorage<string>(storageKey, '#60a72e', rawStringStorage, {
  getOnInit: true,
});

export default qrColorState;

