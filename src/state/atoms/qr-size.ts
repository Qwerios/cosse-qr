import { atomWithStorage } from "jotai/utils";
import createRawLocalStorage from "../raw-local-storage";

const storageKey = "qrSize";

const qrSizeStorage = createRawLocalStorage<number>(
  (storedValue) => {
    const parsedSize = parseInt(storedValue, 10);

    // Reject anything unparseable or non-positive so a corrupted entry falls
    // back to the default instead of rendering a zero-pixel QR code.
    return Number.isNaN(parsedSize) || parsedSize <= 0 ? undefined : parsedSize;
  },
  (value) => `${value}`,
);

const qrSizeState = atomWithStorage<number>(storageKey, 250, qrSizeStorage, { getOnInit: true });

export default qrSizeState;
