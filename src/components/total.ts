import { html, render } from "lit-html";
import { Unsubscribe } from "redux";
import { store } from "../store";

class Total extends HTMLElement {
  private count = 0;
  private storeUnsubscribe?: Unsubscribe;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  public connectedCallback() {
    this.storeUnsubscribe = store.subscribe(() => {
      this.stateChanged();
    });
    this.render();
  }

  public disconnectedCallback() {
    this.storeUnsubscribe!();
  }

  public render() {
    render(
      html`
        Total: ${this.count}
      `,
      this.shadowRoot!
    );
  }

  private stateChanged() {
    const count = store.getState().total;
    if (this.count !== count) {
      this.count = count;
      this.render();
    }
  }
}
customElements.define("total-count", Total);
