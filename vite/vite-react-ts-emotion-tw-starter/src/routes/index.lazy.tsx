import { createLazyFileRoute } from "@tanstack/react-router";
import { css } from "@emotion/react";

import FeatureList from "@/components/feature-list";
import Header from "@/components/header/header";
import Counter from "@/components/counter";
import MockDataPreview from "@/components/msw-data";

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
      <Header />
      <Counter />
      <MockDataPreview />
      <FeatureList heading="Features" />
    </div>
  );
}
