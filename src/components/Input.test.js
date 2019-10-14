import { render, fireEvent } from '@testing-library/vue';
import '@testing-library/jest-dom/extend-expect';

import Input from './Input.vue';

describe('Input', () => {
  it('runs tests', async () => {
    const { getByText, getByLabelText } = render(Input);

    expect(getByLabelText('Label text')).toBeVisible();

    await fireEvent.input(getByLabelText('Label text'), {
      target: { value: 'abc' }
    });

    expect(getByText('abc')).toBeVisible();
    expect(getByLabelText('Label text')).toHaveValue('abc');
  });
});
