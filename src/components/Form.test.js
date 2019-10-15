import { render, fireEvent } from '@testing-library/vue';
import '@testing-library/jest-dom/extend-expect';

import Form from './Form.vue';

describe('Form', () => {
  it('runs tests', async () => {
    const { emitted, getByPlaceholderText, getByText, queryByText } = render(
      Form
    );

    const name = 'foobar';
    const password = 'abc123';
    const event = 'submit';

    expect(getByText('next')).toBeVisible();
    expect(getByText('next')).toBeDisabled();
    expect(queryByText('submit')).toBeNull();

    await fireEvent.input(getByPlaceholderText('enter name'), {
      target: { value: name }
    });

    expect(getByText('next')).not.toBeDisabled();

    await fireEvent.click(getByText('next'));

    expect(queryByText('next')).toBeNull();
    expect(getByText('submit')).toBeVisible();
    expect(getByText('submit')).toBeDisabled();

    await fireEvent.input(getByPlaceholderText('enter password'), {
      target: { value: password }
    });

    expect(getByText('submit')).not.toBeDisabled();

    await fireEvent.click(getByText('submit'));

    expect(emitted()[event][0]).toEqual([name, password]);
  });
});
