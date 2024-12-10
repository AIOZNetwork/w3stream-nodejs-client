import W3StreamClient from '../../src';
import dotenv from 'dotenv';

dotenv.config();

export const publicKey = process.env.PUBLIC_KEY;
export const secretKey = process.env.SECRET_KEY;
export const PRODUCTION_BASE_URI = 'https://api.w3stream.xyz/api';

export const mockTestClient = () => {
  return new W3StreamClient({
    publicKey: publicKey || '',
    secretKey: secretKey || '',
  });
};

const anonymousPublicKey = process.env.ANONYMOUS_PUBLIC_KEY;
const anonymousSecretKey = process.env.ANONYMOUS_SECRET_KEY;
export const anonymousMockTestClient = () => {
  return new W3StreamClient({
    publicKey: anonymousPublicKey || '',
    secretKey: anonymousSecretKey || '',
  });
};
