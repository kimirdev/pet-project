import { useState } from "react";
import styles from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      Counter: <span className={styles["test-kebab"]}>{count}</span>
      <button onClick={() => setCount((val) => val + 1)} className={styles.btn}>
        increment
      </button>
    </div>
  );
};

export default Counter;
