import React from "react";
import { ThemeProvider } from "./components/theme-provider";
import Wrapper from "./components/Wrapper";
import "@fontsource/poppins";

export default function App() {
  return (
    <ThemeProvider>
      <div
        className="h-[1020px] w-[1920px] bg-gradient-to-br from-50% from-mySkyBlue flex justify-center items-center"
        style={{ fontFamily: "poppins" }}
      >
        <Wrapper />
      </div>
    </ThemeProvider>
  );
}
