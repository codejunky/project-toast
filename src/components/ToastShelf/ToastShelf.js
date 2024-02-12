import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ notifications, closeNotification }) {
  return (
    <ol className={styles.wrapper}>
      {notifications.map((notification, idx) => (
        <li key={notification.id} className={styles.toastWrapper}>
          <Toast
            variant={notification.variant}
            closeToast={() => closeNotification(notification)}
          >
            {notification.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
