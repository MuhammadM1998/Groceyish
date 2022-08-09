import { render } from '@testing-library/vue';
import TheHeader from '../../components/Header/Header.vue';

describe('The Header', () => {
  it('Renders correctly', () => {
    const wrapper = render(TheHeader);
    expect(wrapper).toBeDefined();
  });
});
