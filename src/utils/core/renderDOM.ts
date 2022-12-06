import Block from "./Block";

export default function render(query: string, block: Block) {
  const root = document.querySelector(query);

  if (!root) {
    throw new Error('root not found')
  }

  // Можно завязаться на реализации вашего класса Block
  root.appendChild(block.getContent());

  block.dispatchComponentDidMount();

  return root;
}
