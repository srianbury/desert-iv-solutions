import React, { useEffect } from "react";
import type { useNotificationReturn } from "./useNotification";

type NotificationContainerProps = {
  notification: useNotificationReturn;
  children: React.ReactNode;
};
function NotificationContainer({
  notification,
  children,
}: NotificationContainerProps) {
  const { isVisible, hide, duration } = notification;

  useEffect(() => {
    const timeout = setTimeout(() => {
      hide();
    }, duration);
    return () => {
      clearTimeout(timeout);
    };
  }, [hide, duration]);

  if (!isVisible) {
    return null;
  }

  return <>{children}</>;
}

export { NotificationContainer };
