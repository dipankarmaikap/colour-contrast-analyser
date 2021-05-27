import { ColorContext } from "@contexts/ColorContext";
import { useContext } from "react";

export default function useColor() {
  return useContext(ColorContext);
}
