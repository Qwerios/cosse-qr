import { atomWithStorage } from 'jotai/utils';
import { rawStringStorage } from '../raw-local-storage';

const storageKey = 'qrUrl';

const qrDataUrlState = atomWithStorage<string>(
  storageKey,
  'https://www.cossecamperadventure.com',
  rawStringStorage,
  { getOnInit: true },
);

export default qrDataUrlState;

