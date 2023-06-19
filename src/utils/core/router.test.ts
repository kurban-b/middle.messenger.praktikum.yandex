import Router from './router';
import { expect } from 'chai';
import sinon from 'sinon';
import Block from "./Block";

describe('Router', () => {
  const originalForward = window.history.forward;
  const originalBack = window.history.back;
  const getContentFake = sinon.fake.returns(document.createElement('div'));
  const BlockMock = class {
    getContent = getContentFake;
  } as unknown as typeof Block;

  beforeEach(() => {
    Router.reset();
    window.history.forward = sinon.fake();
    window.history.back = sinon.fake();
  });

  after(() => {
    window.history.forward = originalForward;
    window.history.back = originalBack;
  });

  it('use() should return Router instance', () => {
    // @ts-ignore
    const result = Router.use('/', BlockMock);

    expect(result).to.eq(Router);
  });

  it('should render a page on start', () => {
    // @ts-ignore
    Router.use('/', BlockMock).start();

    expect(getContentFake.callCount).to.eq(1);
  });

  it('method forward()', () => {
    Router.forward();

    expect((window.history.forward as any).callCount).to.eq(1);
  });

  it('method back()', () => {
    Router.back();

    expect((window.history.back as any).callCount).to.eq(1);
  });
});
