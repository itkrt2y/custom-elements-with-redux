import { html, render } from "lit-html";
import { store } from "../store";

export function counter(mount: HTMLElement, count: number) {
  const template = html`
    <p>${count}</p>

    <button
      @click=${() => {
        counter(mount, count + 1);
        store.dispatch({ type: "INCREMENT" });
      }}
    >
      +
    </button>

    <button
      @click=${() => {
        counter(mount, count - 1);
        store.dispatch({ type: "DECREMENT" });
      }}
    >
      -
    </button>
  `;

  render(template, mount);
}
