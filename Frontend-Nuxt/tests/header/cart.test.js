import { render } from '@testing-library/vue';
import AppCart from '../../components/App/AppCart.vue';

describe('Cart', () => {
  it('Renders correctly', () => {
    const wrapper = render(AppCart);
    expect(wrapper).toBeDefined();
  });
});
