import { render } from '@testing-library/vue';
import AppLogo from '../../components/App/AppLogo.vue';

describe('Logo', () => {
  it('Renders correctly', () => {
    const wrapper = render(AppLogo);
    expect(wrapper).toBeDefined();
  });
});
