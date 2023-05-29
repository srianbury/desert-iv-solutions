import React, { useState } from "react";

type useNotificationReturn = {
  isVisible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  show: () => void;
  hide: () => void;
  duration?: number;
};
function useNotification(duration: number): useNotificationReturn {
  const [isVisible, setVisible] = useState<boolean>(false);

  function show() {
    setVisible(true);
  }

  function hide() {
    setVisible(false);
  }

  return { isVisible, setVisible, show, hide, duration: duration || 2000 };
}

export { useNotification };
export type { useNotificationReturn };
