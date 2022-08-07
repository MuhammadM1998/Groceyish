import { render, screen } from '@testing-library/vue';
import Intro from '../components/Section/Intro.vue';

describe('Intro Section', () => {
  it('Renders correctly', () => {
    const wrapper = render(Intro);
    expect(wrapper).toBeDefined();
  });

  it('Contains a Swiper.js slider', async () => {
    render(Intro);
    const swiper = await screen.findByTestId('intro-swiper');
    expect(swiper).toBeDefined();
  });
});
