import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const removeToast = React.useCallback((id) => {
    setToasts((currentToasts) =>
      currentToasts.filter((elem) => elem.id !== id)
    );
  }, []);

  const addToast = React.useCallback((variant, message) => {
    const id = crypto.randomUUID();
    setToasts((currentToasts) => [...currentToasts, { id, variant, message }]);
  }, []);

  React.useEffect(() => {
    const handleEscape = (event) => {
      if (event.code === "Escape") {
        setToasts(() => []);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
