export const useStrapi = () => {
  const { find, findOne } = useStrapi4();

  // An Array Shuffling function based on Fisher-Yates Algorithm
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];

      // Swap
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  return {
    getCategories: async () => {
      const { data } = await find('categories', { populate: '*' });
      return data;
    },

    getProducts: async () => {
      const { data } = await find('products', { populate: 'Image' });
      return shuffle(data);
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
      return shuffle(data);
    },

    getDailyBestSells: async () => {
      const { data } = await find('products', {
        populate: '*',
        filters: {
          isDailyBestSell: {
            $eq: true,
          },
        },
      });
      return shuffle(data);
    },

    getProduct: async (productID) => {
      const { data } = await findOne('products', productID, {
        populate: '*',
      });
      return data;
    },

    getRelatedProducts: async (categoryID) => {
      const { data } = await find('products', {
        populate: '*',
        filters: {
          Category: {
            Name: { $eq: categoryID },
          },
        },
      });
      return shuffle(data);
    },

    getCategory: async (categoryID) => {
      const { data } = await findOne('categories', categoryID, {
        populate: {
          Image: '*',
          Products: {
            populate: '*',
          },
        },
      });
      return data;
    },
  };
};
