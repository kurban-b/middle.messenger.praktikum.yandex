import { assert } from 'chai';
import Block from './Block';

class Component extends Block {
  render() {
    // language=hbs
    return `
        <div>{{mockedProp}}</div>
    `;
  }
}

const MockedComponent = new Component({ mockedProp: 'initial props' });

describe('Component test', () => {
  it('Should return right text content', () => {
    assert.equal(MockedComponent.getContent()?.textContent, 'initial props');
  });

  it('Should change props correctly', () => {
    MockedComponent.setProps({ mockedProp: 'Changed props' });
    assert.equal(MockedComponent.props.mockedProp, 'Changed props');
  });
});
