export const useStrapi = () => {
  const { find } = useStrapi4();

  return {
    getCategories: async () => {
      const { data } = await find('categories', { populate: '*' });
      return data;
    },

    getProducts: async () => {
      const { data } = await find('products', { populate: 'Image' });
      return data;
    },

    getFeatured: async () => {
      const { data } = await find('products', {
        populate: '*',
        filters: {
          isFeatured: {
            $eq: true,
          },
        },
      });
      return data;
    },
  };
};
