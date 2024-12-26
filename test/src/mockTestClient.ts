import W3StreamClient from '../../src';
import dotenv from 'dotenv';

dotenv.config();

export const publicKey = process.env.TEST_PUBLIC_KEY;
export const secretKey = process.env.TEST_SECRET_KEY;
export const PRODUCTION_BASE_URI = 'https://api.w3stream.xyz/api';

export const mockTestClient = () => {
  return new W3StreamClient({
    publicKey: publicKey || '',
    secretKey: secretKey || '',
  });
};

const anonymousPublicKey = process.env.TEST_ANONYMOUS_PUBLIC_KEY;
const anonymousSecretKey = process.env.TEST_ANONYMOUS_SECRET_KEY;
export const anonymousMockTestClient = () => {
  return new W3StreamClient({
    publicKey: anonymousPublicKey || '',
    secretKey: anonymousSecretKey || '',
  });
};
