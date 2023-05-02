export const transformCollection = (models: any) => {
  return models.map((model: any) => transformModel(model));
};

export const transformModel = (model: any) => {
  return {
    id: model._id,
    name: model.name
  };
};
