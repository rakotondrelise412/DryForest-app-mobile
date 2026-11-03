
import React, {
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

import Toast from "@/components/common/Toast";

type ToastType = "success" | "error";

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(
  undefined
);

export function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState<ToastType>("success");

  const showToast = useCallback(
    (newMessage: string, newType: ToastType = "success") => {
      setMessage(newMessage);
      setType(newType);
      setVisible(false);

      requestAnimationFrame(() => {
        setVisible(true);
      });
    },
    []
  );

  const hideToast = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <Toast
        visible={visible}
        message={message}
        type={type}
        onHide={hideToast}
      />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error(
      "useToast doit être utilisé dans ToastProvider."
    );
  }

  return context;
}
