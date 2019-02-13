import { html, render } from "lit-html";

export function total(mount: HTMLElement, count: number) {
  render(
    html`
      ${count}
    `,
    mount
  );
}
