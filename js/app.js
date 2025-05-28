class Table extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = /*html*/`
      <style>
        :host {
          display: block;
        }

        .tarea{
            background: #111;
        }
        h3{

        }
        p{

        }
      </style>
      <div class="tarea">
        <h3 class="title" id="title">${title}<h3>
        <p class="content" id="content">${content}</p>
        <span class="dateStart" id="dateStart">${dateStart}</span>
        <span class="dateFinish" id="dateStart">${dateFinish}</span>
      </div>
    `;
  }

  // Se ejecuta cuando se inserta el componente en el DOM
  connectedCallback() {
    fetch('http://localhost:3000/pendientes')

    => {
        this.dataset = d
    }
    title = this.shadowRoot.getElementById('title') = d.title || "titulo no encontrado"
    content = this.shadowRoot.getElementById('content') d.content || "titulo no encontrado"
    title = this.shadowRoot.getElementById('title') = d.title || "titulo no encontrado"
    title = this.shadowRoot.getElementById('title') = d.title || "titulo no encontrado"
  }
}

customElements.define('table', Table);

