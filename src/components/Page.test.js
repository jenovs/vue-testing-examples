import { render } from '@testing-library/vue';
import '@testing-library/jest-dom/extend-expect';

import Page from './Page.vue';

describe('Page', () => {
  it('runs tests', async () => {
    let routerRef;

    const { getByText } = render(Page, { routes: [] }, (vue, store, router) => {
      router.push('/?a=100&b=200');
      routerRef = router;
    });

    expect(routerRef.currentRoute.query).toEqual({});
    expect(getByText('100')).toBeVisible();
    expect(getByText('200')).toBeVisible();
  });
});
