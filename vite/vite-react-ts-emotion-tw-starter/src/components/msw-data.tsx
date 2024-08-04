import { css } from "@emotion/react";
import { useQuery } from "@tanstack/react-query";

type MockData = {
  id: string;
  firstName: string;
  lastName: string;
  description: string;
};

const getMockData = async () => {
  const res = await fetch("https://example.com/user");
  return await res.json();
};

const mockCss = css`
  max-width: 100%;

  > h2 {
    font-size: 1.5em;
  }

  > pre {
    overflow-x: auto;
    padding: 0 3em;
    text-align: left;
  }
`;

const MockDataPreview = () => {
  const { data, isLoading, error } = useQuery<MockData>({
    queryKey: ["mock-data"],
    queryFn: getMockData,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div css={mockCss}>
      <h2>Mock Data</h2>
      {error ? <span>{error.message}</span> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default MockDataPreview;
