import Block from '../../../../utils/core/Block';

interface ISearchProps {
  onChange: (e: EventTarget) => void
}

class Search extends Block {
  constructor(props: ISearchProps) {
    super({
      ...props,
      events: {
        input: props.onChange,
      },
    });
  }

  render(): string {
    // language=hbs
    return `
        <input class="search__input" type="text" placeholder="Поиск">
    `;
  }
}

export default Search;
