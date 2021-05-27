import useColorProvider from "@hooks/useColorProvider";
import { createContext } from "react";
export const ColorContext = createContext();
export function ColorProvider({ children }) {
  const color = useColorProvider();
  return (
    <ColorContext.Provider value={color}>{children}</ColorContext.Provider>
  );
}
