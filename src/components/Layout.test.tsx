import { render, screen } from "@testing-library/react";

import { Layout } from "./Layout";

describe("Layout", () => {
  it.concurrent("Should be rendered", () => {
    render(
      <Layout>
        <div>hello</div>
      </Layout>,
    );
    const headers = screen.getByText("Thomathings");
    const text = screen.getByText("hello");

    expect(headers).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  it.concurrent("Works with a link", () => {
    render(
      <Layout>
        <div>hello</div>
      </Layout>,
    );
    const a = screen.getByRole("link");
    expect(a).toHaveAttribute("href", "/");
  });
});
