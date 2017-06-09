const timerGame = require('./module');

jest.useFakeTimers();

describe('timer mock test suites', () => {

  const callback = jest.fn();

  afterEach(() => {
    callback.mockReset();
  });
  
  test('waits 1 second before ending the game', () => {
    timerGame();
    // console.log(setTimeout.mock.calls);
    expect(setTimeout.mock.calls.length).toBe(1);
    expect(setTimeout.mock.calls[0][1]).toBe(1000);
  });

  test('calls the callback after 1 second', () => {

    expect(jest.isMockFunction(timerGame)).toBeFalsy();

    expect(callback).not.toHaveBeenCalled();

    timerGame(callback);

    //快进所有的定时器，直到定时器执行完毕
    //不用等待真实的定时器的时间
    jest.runAllTimers();

    expect(callback).toHaveBeenCalled();
    expect(callback.mock.calls).toHaveLength(1);

  });

  test('test callback afterEach status', () => {

    expect(callback.mock.calls).toHaveLength(0);
    expect(callback.mock.instances).toHaveLength(0);

  });

  test('calls the callback after 5 second via runTimersToTime', () => {

    expect(callback).not.toHaveBeenCalled();
    
    timerGame(callback);

    jest.runTimersToTime(500);

    expect(callback).toHaveBeenCalled();
    expect(callback.mock.calls).toHaveLength(1);

  });
})
