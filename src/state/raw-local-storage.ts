type Unsubscribe = () => void;

/**
 * Structural copy of Jotai's storage contract. Jotai ships the
 * `atomWithStorage` implementation but does not re-export the interface its
 * storage argument must satisfy, so the shape is restated here; it is matched
 * structurally when the adapter is passed to `atomWithStorage`.
 */
export interface SyncStorage<Value> {
  getItem: (storageKey: string, initialValue: Value) => Value;
  setItem: (storageKey: string, newValue: Value) => void;
  removeItem: (storageKey: string) => void;
  subscribe?: (
    storageKey: string,
    onStoredValueChange: (value: Value) => void,
    initialValue: Value,
  ) => Unsubscribe | undefined;
}

/**
 * Builds a Jotai storage adapter that keeps values in localStorage as plain
 * strings.
 *
 * Jotai's built-in `createJSONStorage` JSON-encodes everything, which would
 * rewrite an existing `#60a72e` entry as `"#60a72e"`. Settings saved by earlier
 * versions of this app were written unquoted, so a JSON storage would fail to
 * read them and silently reset every preference. This adapter preserves the
 * original on-disk format instead.
 *
 * `parseStoredValue` returns undefined for anything it cannot interpret, which
 * makes the atom fall back to its initial value.
 */
const createRawLocalStorage = <Value>(
  parseStoredValue: (storedValue: string) => Value | undefined,
  serializeValue: (value: Value) => string,
): SyncStorage<Value> => ({
  getItem: (storageKey, initialValue) => {
    const storedValue = localStorage.getItem(storageKey);
    if (storedValue === null) {
      return initialValue;
    }

    return parseStoredValue(storedValue) ?? initialValue;
  },

  setItem: (storageKey, newValue) => {
    localStorage.setItem(storageKey, serializeValue(newValue));
  },

  removeItem: (storageKey) => {
    localStorage.removeItem(storageKey);
  },

  // Mirrors changes made in other browser tabs. This replaces the manual
  // 'storage' event listeners the Recoil atom effects used to register; Jotai
  // calls this only while an atom is mounted and unsubscribes on unmount, so
  // the listeners no longer leak.
  subscribe: (storageKey, onStoredValueChange, initialValue) => {
    const handleStorageEvent = (storageEvent: StorageEvent) => {
      if (storageEvent.key !== storageKey) {
        return;
      }

      // A null newValue means the key was removed or the store was cleared.
      onStoredValueChange(
        storageEvent.newValue === null
          ? initialValue
          : parseStoredValue(storageEvent.newValue) ?? initialValue,
      );
    };

    window.addEventListener('storage', handleStorageEvent);

    return () => window.removeEventListener('storage', handleStorageEvent);
  },
});

/** Shared adapter for atoms whose value is already a plain string. */
export const rawStringStorage = createRawLocalStorage<string>(
  (storedValue) => storedValue,
  (value) => value,
);

export default createRawLocalStorage;

