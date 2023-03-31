import { render } from "@testing-library/react";
import { config } from "dotenv";
import { ReactElement } from "react";
import { vi } from "vitest";

import { Meta } from "./Meta";

vi.mock("next/head", () => {
  return {
    __esModule: true,
    default: ({ children }: { children: ReactElement[] }) => {
      return <>{children}</>;
    },
  };
});

describe("Meta", () => {
  beforeAll(() => {
    config();
  });

  it.concurrent("Sets the default title/description correctly", async () => {
    render(<Meta />, {
      container: document.head,
    });

    expect(document.title).toBe("Thomathings");
    expect(
      document
        .querySelector("meta[name=\"description\"]")
        .attributes.getNamedItem("content").value,
    ).toBe("Personal things by Thomas.");
  });

  it.concurrent("Sets the given title/description", () => {
    render(
      <Meta title="sample" description="This is a sample site for testing" />,
      {
        container: document.head,
      },
    );

    expect(document.title).toBe("sample");
    expect(
      document
        .querySelector("meta[name=\"description\"]")
        .attributes.getNamedItem("content").value,
    ).toBe("This is a sample site for testing");
  });

  it.concurrent("Sets properties for OGP", async () => {
    render(<Meta />, {
      container: document.head,
    });

    expect(
      document
        .querySelector("meta[property=\"og:type\"]")
        .attributes.getNamedItem("content").value,
    ).toBe("website");
    expect(
      document
        .querySelector("meta[property=\"og:title\"]")
        .attributes.getNamedItem("content").value,
    ).toBe("Thomathings");
    expect(
      document
        .querySelector("meta[property=\"og:description\"]")
        .attributes.getNamedItem("content").value,
    ).toBe("Personal things by Thomas.");
    expect(
      document
        .querySelector("meta[property=\"og:url\"]")
        .attributes.getNamedItem("content").value,
    ).toBe("https://thomathings.vercel.app");
    expect(
      document
        .querySelector("meta[property=\"og:image\"]")
        .attributes.getNamedItem("content").value,
    ).toBe("https://i.imgur.com/Welh3vK.jpg");
  });

  it.concurrent("Sets the given type/url for OGP", () => {
    render(<Meta type="article" url="www.sample.com" />, {
      container: document.head,
    });

    expect(
      document
        .querySelector("meta[property=\"og:type\"]")
        .attributes.getNamedItem("content").value,
    ).toBe("article");
    expect(
      document
        .querySelector("meta[property=\"og:url\"]")
        .attributes.getNamedItem("content").value,
    ).toBe("www.sample.com");
  });

  it.concurrent("Sets names for a Twitter card", () => {
    render(<Meta />, {
      container: document.head,
    });

    expect(
      document
        .querySelector("meta[name=\"twitter:card\"]")
        .attributes.getNamedItem("content").value,
    ).toBe("summary");
    expect(
      document
        .querySelector("meta[name=\"twitter:title\"]")
        .attributes.getNamedItem("content").value,
    ).toBe("Thomathings");
    expect(
      document
        .querySelector("meta[name=\"twitter:description\"]")
        .attributes.getNamedItem("content").value,
    ).toBe("Personal things by Thomas.");
    expect(
      document
        .querySelector("meta[name=\"twitter:image\"]")
        .attributes.getNamedItem("content").value,
    ).toBe("https://i.imgur.com/Welh3vK.jpg");
  });
});
