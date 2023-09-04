import { addDoc, collection } from 'firebase/firestore';

import { db } from './config';

import type { WorkerType } from '@/types/worker';

const addWorker = async (data: WorkerType): Promise<void> => {
  try {
    await addDoc(collection(db, 'workers'), data);
  } catch (e) {
    return;
  }
};

export default addWorker;
