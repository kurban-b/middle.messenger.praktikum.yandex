import Block from './Block';

export default function render(query: string, block: Block | null) {
  const root = document.querySelector(query);

  if (!root) {
    throw new Error('root not found');
  }

  if (!block) {
    throw new Error('component not found');
  }

  const element = block.getContent();
  if (element) {
    root.appendChild(element);

    if (block.dispatchComponentDidMount) {
      block.dispatchComponentDidMount();
    }
  } else {
    console.error('Block.getContent() into render return null');
  }

  return root;
}
