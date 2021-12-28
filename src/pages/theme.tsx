import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React, {
  useState,
  useEffect,
  createContext,
  SetStateAction,
  Dispatch,
} from "react";
//import Menu from "../components/organisms/menu";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(var(--warning))", //"#ae0d16",
    },
  },
});

type Props = {
  children: React.ReactNode;
};

export const SerifContext = createContext<{
  setSerifs: Dispatch<SetStateAction<string[]>>;
  serifs: string[];
}>({ setSerifs: () => {}, serifs: [""] });

//TODO ボリューム調整
export default function Theme({ children }: Props) {
  const [serifs, setSerifs] = useState([""]);
  useEffect(() => {
    const clickOrTap = window.matchMedia &&
    window.matchMedia("(max-device-width: 640px)").matches ?
    "タップ" : "クリック"
    setSerifs([clickOrTap + "してセリフを入れてね"]);
  }, []);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <SerifContext.Provider value={{ setSerifs: setSerifs, serifs: serifs }}>
          {children}
        </SerifContext.Provider>
      </ThemeProvider>
    </>
  );
}
