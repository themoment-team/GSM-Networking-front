import { NextResponse } from 'next/server';

// import getWorkerList from '@/apis/getWorkerList';

export async function GET() {
  // const workerList = await getWorkerList();

  // return NextResponse.json(workerList);

  return NextResponse.json({ message: 'Hello World!' });
}
