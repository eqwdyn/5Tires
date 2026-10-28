import { useState } from "react";

type UseAccordionOptions = {
  /** Whether multiple items can be open at once. Default: false (accordion behavior - only one open) */
  multiple?: boolean;
  /** Initially open item index(es) (number or array) */
  defaultOpen?: number | number[];
};

export function useAccordion<T = unknown>(options: UseAccordionOptions = {}) {
  const { multiple = false, defaultOpen } = options;

  const [openKeys, setOpenKeys] = useState<readonly (string | number)[]>(() => {
    if (defaultOpen === undefined) return [];
    if (multiple) {
      if (Array.isArray(defaultOpen)) return defaultOpen;
      return [defaultOpen];
    }
    if (Array.isArray(defaultOpen)) return defaultOpen.length > 0 ? [defaultOpen[0]] : [];
    return [defaultOpen];
  });

  const isOpen = (key: string | number): boolean => {
    return openKeys.includes(key);
  };

  const toggle = (key: string | number): void => {
    setOpenKeys((prev) => {
      if (multiple) {
        if (prev.includes(key)) {
          return prev.filter((k) => k !== key);
        }
        return [...prev, key];
      } else {
        if (prev.includes(key)) {
          return [];
        }
        return [key];
      }
    });
  };

  const open = (key: string | number): void => {
    if (!isOpen(key)) toggle(key);
  };

  const close = (key: string | number): void => {
    if (isOpen(key)) {
      setOpenKeys((prev) => prev.filter((k) => k !== key));
    }
  };

  const setOpen = (keys: readonly (string | number)[]): void => {
    if (multiple) {
      setOpenKeys(keys);
    } else {
      if (keys.length > 0) {
        setOpenKeys([keys[0]]);
      } else {
        setOpenKeys([]);
      }
    }
  };

  return {
    isOpen,
    toggle,
    open,
    close,
    setOpen,
    openKeys,
  };
}