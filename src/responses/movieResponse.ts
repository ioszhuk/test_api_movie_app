export const transformCollection = (models: any) => {
  return models.map((model: any) => transformModel(model));
};

export const transformModel = (model: any) => {
  const imgFullUrl = `http://localhost:${process.env.PORT}/movies/${model.img}`;

  return {
    id: model._id,
    name: model.name,
    slug: model.key,
    description: model.description,
    img: imgFullUrl,
    genres: model.genres,
    rate: model.rate,
    length: model.length
  };
};
