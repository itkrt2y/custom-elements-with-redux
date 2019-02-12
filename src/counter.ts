import { html, render } from "lit-html";

export function counter(mount: HTMLElement, count: number) {
  const template = html`
    <p>${count}</p>

    <button
      @click=${() => {
        counter(mount, count + 1);
      }}
    >
      +
    </button>

    <button
      @click=${() => {
        counter(mount, count - 1);
      }}
    >
      -
    </button>
  `;

  render(template, mount);
}
