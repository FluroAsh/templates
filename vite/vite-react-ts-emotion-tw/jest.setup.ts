import "@testing-library/jest-dom";
import { matchers } from "@emotion/jest";
import { server } from "@/mocks/node.js";

expect.extend(matchers);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
