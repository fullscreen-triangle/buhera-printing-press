window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true,
    tags: 'ams',
    macros: {
      RR: '{\\mathbb R}',
      NN: '{\\mathbb N}',
      ZZ: '{\\mathbb Z}',
      CC: '{\\mathbb C}',
      QQ: '{\\mathbb Q}',
      PP: '{\\mathbb P}',
      EE: '{\\mathbb E}',
      bfx: '{\\mathbf{x}}',
      bfy: '{\\mathbf{y}}',
      bfz: '{\\mathbf{z}}',
      bfu: '{\\mathbf{u}}',
      bfv: '{\\mathbf{v}}',
      bfw: '{\\mathbf{w}}',
      bfa: '{\\mathbf{a}}',
      bfb: '{\\mathbf{b}}',
      bfc: '{\\mathbf{c}}',
      bfd: '{\\mathbf{d}}',
      bfe: '{\\mathbf{e}}',
      bff: '{\\mathbf{f}}',
      bfg: '{\\mathbf{g}}',
      bfh: '{\\mathbf{h}}',
      bfi: '{\\mathbf{i}}',
      bfj: '{\\mathbf{j}}',
      bfk: '{\\mathbf{k}}',
      bfl: '{\\mathbf{l}}',
      bfm: '{\\mathbf{m}}',
      bfn: '{\\mathbf{n}}',
      bfo: '{\\mathbf{o}}',
      bfp: '{\\mathbf{p}}',
      bfq: '{\\mathbf{q}}',
      bfr: '{\\mathbf{r}}',
      bfs: '{\\mathbf{s}}',
      bft: '{\\mathbf{t}}'
    }
  },
  svg: {
    fontCache: 'global'
  },
  startup: {
    ready() {
      MathJax.startup.defaultReady();
      // Custom styling for dark theme
      const style = document.createElement('style');
      style.textContent = `
        .MathJax {
          color: #87ceeb !important;
        }
        .MathJax svg {
          color: #87ceeb !important;
        }
        .MathJax_Display {
          color: #87ceeb !important;
        }
        mjx-container {
          color: #87ceeb !important;
        }
        mjx-container svg {
          color: #87ceeb !important;
        }
      `;
      document.head.appendChild(style);
    }
  }
}; 