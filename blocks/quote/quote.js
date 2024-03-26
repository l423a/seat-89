import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const [quoteWrapper] = block.children;

  // get the paragraph and its parent
  const par = quoteWrapper.querySelector('p');
  if (par) {
    const parWrapper = par.parentElement;
    // create a new <blockquote> we will wrap it in
    const blockquote = document.createElement('blockquote');
    // move the instrumentation from the paragraph wrapper to the <blockquote> (if any)
    moveInstrumentation(parWrapper, blockquote);
    // replace the paragraph wrapper with the <blockquote>
    parWrapper.replaceWith(blockquote);
    // and append all quote paragraphs to the <blockquote>
    blockquote.append(...parWrapper.children);
  }
}
