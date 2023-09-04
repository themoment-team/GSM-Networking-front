import { collection, getDocs } from 'firebase/firestore';

import { db } from './config';

import type { WorkerType } from '@/types';

const getWorkerList = async (): Promise<WorkerType[] | []> => {
  try {
    const querySnapshot = await getDocs(collection(db, 'workers'));

    const workerList: WorkerType[] = [];

    querySnapshot.forEach((doc) => {
      workerList.push({ ...(doc.data() as WorkerType), id: doc.id });
    });

    return workerList;
  } catch (e) {
    return [];
  }
};

export default getWorkerList;
