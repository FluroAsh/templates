import { createLazyFileRoute } from "@tanstack/react-router";
import { css } from "@emotion/react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

export const wrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;

function Index() {
  return (
    <div css={wrapperCss}>
      <p>This is a total blank canvas 🧑‍🎨</p>
    </div>
  );
}
