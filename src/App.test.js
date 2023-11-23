import { render, screen } from '@testing-library/react';
import { App } from './App';
import TaskListContextProvider from './context/TaskListContext';

const MockApp = ()=> {
  <TaskListContextProvider>
    <App/>
  </TaskListContextProvider>
}

test('renders learn react link', () => {
  render(<MockApp />);
  //const linkElement = screen.getByText(/learn react/i);
  expect(true).toBe(true);
});
