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

  const img = `http://localhost:${process.env.PORT}/movies/${model.img}`;

  return {
    id: model._id,
    name: model.name,
    slug: model.key,
    description: model.description,
    img: img,
    genres: model.genres,
    rate: model.rate,
    length: model.length
  };
};
