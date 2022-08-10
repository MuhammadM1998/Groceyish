export const useStrapi = () => {
  const { find } = useStrapi4();

  return {
    getCategories: async () => {
      const { data } = await find("categories", { populate: "*" });
      return data;
    },
  };
};
