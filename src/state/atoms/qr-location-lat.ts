import { atomWithStorage } from "jotai/utils";
import { rawStringStorage } from "../raw-local-storage";

const storageKey = "qrLat";

// Kept as a string so the text field can hold partial input such as '52.' while
// the user is still typing; qr-data-location parses it.
const qrLocationLatState = atomWithStorage<string>(storageKey, "0", rawStringStorage, {
  getOnInit: true,
});

export default qrLocationLatState;
