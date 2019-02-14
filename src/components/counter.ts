import { html, render } from "lit-html";
import { store } from "../store";

class Counter extends HTMLElement {
  private count = 0;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  public connectedCallback() {
    this.render();
  }

  private render() {
    render(
      html`
        <p>${this.count}</p>

        <button @click=${this.increment}>
          +
        </button>

        <button @click=${this.decrement}>
          -
        </button>
      `,
      this.shadowRoot!
    );
  }

  private increment = () => {
    this.count++;
    store.dispatch({ type: "INCREMENT" });
    this.render();
  };

  private decrement = () => {
    this.count--;
    store.dispatch({ type: "DECREMENT" });
    this.render();
  };
}
customElements.define("lit-counter", Counter);
