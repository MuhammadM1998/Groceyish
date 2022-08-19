export const useStrapi = () => {
  const { find, findOne } = useStrapi4();
  const client = useStrapiClient();
  const config = useRuntimeConfig();

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
      const { data } = await find('products', { populate: '*' });
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

    getRelatedProducts: async (productID, categoryID) => {
      const { data } = await find('products', {
        populate: '*',
        filters: {
          id: { $ne: productID },
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

    isNewSubscriber: async (userEmail) => {
      const { data } = await client('/newsletter-users', {
        method: 'GET',
        headers: {
          Authorization: config.strapiNewsletterToken,
        },
        params: {
          filters: {
            user: {
              $eqi: userEmail,
            },
          },
        },
      });

      return data.length ? false : true;
    },

    addNewsletterSubscriber: async (userEmail) => {
      const response = client('/newsletter-users', {
        method: 'POST',
        headers: {
          Authorization: config.strapiNewsletterToken,
        },
        body: {
          data: {
            user: userEmail,
          },
        },
      });

      return response;
    },

    sendNewsletterEmail: async (userEmail, status) => {
      const response = client('/newsletter', {
        method: 'POST',
        headers: {
          Authorization: config.strapiNewsletterToken,
        },
        params: {
          email: userEmail,
          isNewSubscription: status,
        },
      });
      return response;
    },
  };
};
