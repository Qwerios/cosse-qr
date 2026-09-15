import { atomWithStorage } from "jotai/utils";
import createRawLocalStorage from "../raw-local-storage";

const storageKey = "qrStyle";

/** Shapes react-qrcode-logo can draw the QR modules in, as offered in settings. */
export type QrStyle = "dots" | "squares";

const qrStyleStorage = createRawLocalStorage<QrStyle>(
  // Anything outside the two supported styles falls through to the default.
  (storedValue) => (storedValue === "dots" || storedValue === "squares" ? storedValue : undefined),
  (value) => value,
);

const qrStyleState = atomWithStorage<QrStyle>(storageKey, "dots", qrStyleStorage, {
  getOnInit: true,
});

export default qrStyleState;
