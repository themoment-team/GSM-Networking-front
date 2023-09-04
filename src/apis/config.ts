// Firebase SDK에서 필요한 함수들 import 하기
import { initializeApp, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import type { FirebaseApp } from 'firebase/app';

// Firebase 설정
export let app: FirebaseApp;

// 처음 Firebase 프로젝트 생성할 때 나오는 key들을 .env 파일에 넣고 작업
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  databaseUrl: process.env.NEXT_PUBLIC_DATABASE_URL,
};

// Firebase 초기화
try {
  app = getApp('app');
} catch (e) {
  app = initializeApp(firebaseConfig, 'app');
}

// Firestore 초기화
export const db = getFirestore(app);
