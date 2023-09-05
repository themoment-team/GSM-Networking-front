// 'use client';

// import { useRef } from 'react';

// import addWorker from '@/apis/addWorker';
// import type { WorkerType } from '@/types';

// const RegisterForm: React.FC = () => {
//   const nameRef = useRef<HTMLInputElement>(null);
//   const emailRef = useRef<HTMLInputElement>(null);
//   const generationRef = useRef<HTMLInputElement>(null);
//   const positionRef = useRef<HTMLInputElement>(null);
//   const companyNameRef = useRef<HTMLInputElement>(null);
//   const companyURLRef = useRef<HTMLInputElement>(null);

//   const handleClick = async () => {
//     const name = nameRef.current?.value;
//     const email = emailRef.current?.value;
//     const generation = Number(generationRef.current?.value);
//     const position = positionRef.current?.value;
//     const companyName = companyNameRef.current?.value;
//     const companyURL = companyURLRef.current?.value;

//     const data: WorkerType = {
//       name,
//       email,
//       generation,
//       position,
//       company: {
//         URL: companyURL,
//         name: companyName,
//       },
//     };

//     await addWorker(data);
//   };

//   return (
//     <form>
//       <input type='text' placeholder='name' ref={nameRef} />
//       <input type='text' placeholder='email' ref={emailRef} />
//       <input type='text' placeholder='generation' ref={generationRef} />
//       <input type='text' placeholder='position' ref={positionRef} />
//       <input type='text' placeholder='companyName' ref={companyNameRef} />
//       <input type='text' placeholder='companyURL' ref={companyURLRef} />
//       <button type='button' onClick={handleClick}>
//         Submit
//       </button>
//     </form>
//   );
// };

// export default RegisterForm;
