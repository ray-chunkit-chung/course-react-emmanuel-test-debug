/* eslint-disable no-undef */

// import './index.js';
import App from './App';

// Mock the App. This is for test
jest.mock('./App');

describe('App load correctly', () => {
  it('should call app.listen()', () => {
    expect(App.listen).toHaveBeenCalled();
  });
});
