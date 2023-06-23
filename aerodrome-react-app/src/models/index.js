// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AerodromeStatus } = initSchema(schema);

export {
  AerodromeStatus
};