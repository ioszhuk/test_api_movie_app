export const transformCollection = (models: any) => {
  if (!models) {
    return null;
  }

  return models.map((model: any) => transformModel(model));
};

export const transformModel = (model: any) => {
  if (!model) {
    return null;
  }

  return {
    id: model._id,
    name: model.name
  };
};
