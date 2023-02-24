import config from 'config';
import { connect } from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI: string = config.get('mongoURI');

    await connect(mongoURI);
    console.log('MongoDB Connected...');
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
