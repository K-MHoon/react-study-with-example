import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const MainContent = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        padding: "1.5rem",
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <p>안녕하세요, 테마 변경을 해볼 수 있는 웹사이트 입니다.</p>
      <button onClick={toggleTheme}>테마 변경하기</button>
    </div>
  );
};

export default MainContent;