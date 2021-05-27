import { useState } from "react";

export default function useColorProvider() {
  const [backgroundColor, setBackgroundColor] = useState("red");
  const [foregroundColor, setForegroundColor] = useState("#000000");
  return { backgroundColor, foregroundColor };
}
