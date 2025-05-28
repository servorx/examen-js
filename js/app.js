class Table extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = /*html*/`
      <style>
        :host {
          display: block;
        }
        /* Estilos del componente */
      </style>
      <div>
        <!-- Contenido del componente -->
      </div>
    `;
  }

  // Observar cambios en estos atributos
  static get observedAttributes() {
    return ['attr1', 'attr2'];
  }

  // Se ejecuta cuando se inserta el componente en el DOM
  connectedCallback() {
    console.log('Elemento añadido al DOM');
  }

  // Se ejecuta cuando se elimina el componente del DOM
  disconnectedCallback() {
    console.log('Elemento eliminado del DOM');
  }

  // Se ejecuta cuando un atributo observado cambia
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Atributo name cambiado de oldValue a newValue`);
  }

  // Se ejecuta cuando el componente se mueve a un nuevo documento
  adoptedCallback() {
    console.log('Elemento movido a un nuevo documento');
  }
}

// Definir el elemento personalizado
customElements.define('table', Table);

