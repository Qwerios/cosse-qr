import { atomWithStorage } from 'jotai/utils';
import { rawStringStorage } from '../raw-local-storage';

const storageKey = 'qrLon';

// Kept as a string for the same reason as the latitude atom.
const qrLocationLonState = atomWithStorage<string>(storageKey, '0', rawStringStorage, {
  getOnInit: true,
});

export default qrLocationLonState;

