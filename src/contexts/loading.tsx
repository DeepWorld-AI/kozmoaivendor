import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface LoadingProps {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const LoadingContext = createContext<LoadingProps | undefined>(
  undefined
);
export const LoadingContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
