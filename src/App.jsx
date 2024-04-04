import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MyDashboard, { Navigation } from "./Dashboard";
import styles from "./App.module.css";
import Card from "./Card";

/* JSX = JavaScript + XML */

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <MyDashboard title="News Feed" />
      <MyDashboard title="Analytics" />
      <Navigation />

      <Card
        title="Super Squirrel"
        description="I'm new to JS but I ROCK!"
        image="https://cdn.midjourney.com/6641f89a-422c-472e-bf67-ee3539361630/0_0.webp"
      />

      <Card
        title="Hero Squirrel"
        description="I'm a pro!"
        image="https://cdn.midjourney.com/6641f89a-422c-472e-bf67-ee3539361630/0_3.webp"
      />

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={`${styles.logo}`} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React Intro</h1>
      <div className={`${styles.card}`}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test Hot Module Reload
        </p>
      </div>
      <p className={`${styles["read-the-docs"]}`}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
