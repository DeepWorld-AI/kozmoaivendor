import { createContext, ReactNode, useState } from "react";

interface viewContextProps {
  views: Record<string, string>;
  setView: (key: string, view: string) => void;
  getView: (key: string) => string;
}

export const ViewContext = createContext<viewContextProps | undefined>(
  undefined
);

export const ViewContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [views, setViews] = useState<Record<string, string>>({});

  const setView = (key: string, view: string) => {
    setViews((prevViews) => ({
      ...prevViews,
      [key]: view,
    }));
  };

  const getView = (key: string) => {
    return views[key] || "tabular";
  };

  return (
    <ViewContext.Provider value={{ views, setView, getView }}>
      {children}
    </ViewContext.Provider>
  );
};
