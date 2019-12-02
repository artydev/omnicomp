import { define, WeElement, html } from "omi";

define("custom-element", class extends WeElement {
  static get propTypes() {
    return {
      name: String
    };
  }

  static get css() {
    return `
      button {
        font-size: 200%;
      }`;
  }

  render(props) {
    return html`<button class='btn'>Hello ${props.name}</button>`;
  }
});
