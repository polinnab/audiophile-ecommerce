import {render} from '@testing-library/react';
import App from './App';

test('renders', () => {
  const {container} = render(<App />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div>
        Jest text
      </div>
    </div>
  `);
});
