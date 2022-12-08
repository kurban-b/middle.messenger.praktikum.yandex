import Block from "./Block";

export default function render(query: string, block: Block) {
  const root = document.querySelector(query);

  if (!root) {
    throw new Error('root not found')
  }

  const element = block.getContent()
  if (element) {
    root.appendChild(element);

    block.dispatchComponentDidMount();
  } else {
    console.error(`Block.getContent() into render return null`)
  }

  return root;
}
