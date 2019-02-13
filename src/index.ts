import { counter } from "./components/counter";
import { total } from "./components/total";
import { store } from "./store";

[].forEach.call(
  document.querySelectorAll<HTMLElement>(".counter"),
  (element: HTMLElement) => counter(element, 0)
);

const totalElement = document.querySelector<HTMLElement>("#total")!;
const renderTotal = () => total(totalElement, store.getState().total);
store.subscribe(() => {
  renderTotal();
});
renderTotal();
