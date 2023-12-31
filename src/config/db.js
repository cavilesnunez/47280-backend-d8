import mongoose from 'mongoose';

export const connectDB = () => {
  mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
  db.once('open', () => {
      console.log('Conexión exitosa a MongoDB.');
  });
};
