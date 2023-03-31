import { render } from "@testing-library/react";

import { Pwa } from "./Pwa";

const APPLE_TOUCH_ICON_SIZES = [120, 180];
const ICON_SIZES = [72, 96, 128, 144, 152, 192, 384, 512];

describe("Pwa", () => {
  it.concurrent("Has basic meta data for PWA", () => {
    render(<Pwa />);

    expect(
      document
        .querySelector("link[rel=\"manifest\"]")
        .attributes.getNamedItem("href").value,
    ).toBe("/manifest.json");
    expect(
      document
        .querySelector("meta[name=\"theme-color\"]")
        .attributes.getNamedItem("content").value,
    ).toBe("#171a1c");
  });

  it.concurrent("Has apple-touch icons", () => {
    render(<Pwa />);
    APPLE_TOUCH_ICON_SIZES.map((size) => {
      const nodeAttr = document.querySelector(
        `link[sizes="${size}x${size}"]`,
      ).attributes;

      expect(nodeAttr.getNamedItem("rel").value).toBe("apple-touch-icon");
      expect(nodeAttr.getNamedItem("type").value).toBe("image/png");
      expect(nodeAttr.getNamedItem("href").value).toBe(
        `/icons/icon-${size}x${size}.png`,
      );
    });
  });

  it.concurrent("Has icons", () => {
    render(<Pwa />);
    ICON_SIZES.map((size) => {
      const nodeAttr = document.querySelector(
        `link[sizes="${size}x${size}"]`,
      ).attributes;

      expect(nodeAttr.getNamedItem("rel").value).toBe("icon");
      expect(nodeAttr.getNamedItem("type").value).toBe("image/png");
      expect(nodeAttr.getNamedItem("href").value).toBe(
        `/icons/icon-${size}x${size}.png`,
      );
    });
  });
});
