import cors from 'cors';

export const mongoConnectionUrl = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.mongodb.net/work_db?retryWrites=true&w=majority`;

export const helmetOptions: any = {
  crossOriginResourcePolicy: {
    policy: 'cross-origin'
  }
};

export const corsOptions: cors.CorsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs)
};
