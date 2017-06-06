import m from './module';

describe('mock function test suites', () => {

  it('t-1', () => {
    
    expect(jest.isMockFunction(m.getMessage)).toBeFalsy();
    expect(jest.isMockFunction(m.genName)).toBeFalsy();
    expect(jest.isMockFunction(m.getAge)).toBeFalsy();
    
  });

  it('t-2', () => {

    expect(m.getMessage()).toBe('Her name is novaline, age is 26');
    expect(m.genName()).toBe('novaline');
    expect(m.getAge()).toBe(26);
    
  });

  it('t-3', () => {
    
    m.genName = jest.fn(() => 'Aimee');
    expect(m.genName()).toBe('Aimee');

    //mock m.genName failed
    expect(m.getMessage()).toBe('Her name is Aimee, age is 26');

  });

});
