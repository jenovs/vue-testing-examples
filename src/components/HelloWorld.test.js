import { render, fireEvent } from '@testing-library/vue';
import '@testing-library/jest-dom/extend-expect';

import HelloWorld from './HelloWorld.vue';

describe('HelloWorld', () => {
  it('runs tests', async () => {
    const { getByText } = render(HelloWorld);

    expect(getByText('Times clicked: 0')).toBeVisible();

    await fireEvent.click(getByText('Click Me'));

    expect(getByText('Times clicked: 1')).toBeVisible();

    await fireEvent.click(getByText('Click Me'));

    expect(getByText('Times clicked: 2')).toBeVisible();
  });
});
