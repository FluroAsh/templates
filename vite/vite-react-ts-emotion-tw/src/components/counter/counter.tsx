import useBearStore from "@/stores/bear-store";
import { css } from "@emotion/react";

const counterCss = css`
  > p {
    font-size: 1.5em;
    line-height: 1.8;
  }

  .buttons {
    justify-content: center;
    display: flex;
    gap: 0.5em;
  }
`;

const Counter = () => {
  const { count, increment, decrement, reset } = useBearStore();

  return (
    <div className="count" css={counterCss}>
      <p>Count: {count}</p>
      <div className="buttons">
        <button data-testid="increment-button" onClick={increment}>
          +
        </button>
        <button data-testid="decrement-button" onClick={decrement}>
          -
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
