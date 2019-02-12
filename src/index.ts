import { counter } from "./counter";

const counters = Array.from(document.querySelectorAll<HTMLElement>(".counter"));
counters.forEach(element => counter(element, 0));
