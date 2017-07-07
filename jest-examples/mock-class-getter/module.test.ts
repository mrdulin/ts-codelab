/**
 * Created by dulin on 2017/7/6.
 */
import Component from './module';
const comp = new Component();

Object.defineProperty(comp, 'isBottom', {
  get: jest.fn((): boolean => false)
});

describe('component test suites', () => {
  
  it('t-1', () => {
    expect(comp.isBottom).toBeFalsy();
  });
  
  it('t-2', () => {
    expect(comp.render()).toBeFalsy();
  });
  
});
