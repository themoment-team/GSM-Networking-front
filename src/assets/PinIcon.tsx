'use client';

interface Props {
  isPinned?: boolean;
}

const PinIcon: React.FC<Props> = ({ isPinned }) => (
  <svg
    width='1rem'
    height='1rem'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M10.6158 0.194393L10.7017 0.270272L15.7299 5.29846C15.884 5.4534 15.9776 5.65842 15.9935 5.87637C16.0095 6.09431 15.9469 6.31077 15.817 6.48653C15.6871 6.66228 15.4986 6.78569 15.2855 6.8344C15.0725 6.88312 14.8491 6.85391 14.6557 6.75207L11.7558 9.65105L10.454 13.1223C10.4197 13.2139 10.3709 13.2994 10.3095 13.3756L10.2455 13.4487L8.87421 14.82C8.71668 14.9773 8.50717 15.0717 8.28499 15.0855C8.06282 15.0993 7.84324 15.0316 7.66745 14.895L7.5806 14.8191L5.02719 12.2666L1.55957 15.7333C1.39505 15.8973 1.17429 15.9925 0.942122 15.9996C0.709957 16.0067 0.483798 15.9251 0.30958 15.7715C0.135362 15.6179 0.026149 15.4037 0.00412225 15.1725C-0.0179045 14.9413 0.048907 14.7103 0.190987 14.5266L0.266867 14.4406L3.73358 10.973L1.18108 8.4196C1.02368 8.26218 0.929118 8.05273 0.915148 7.83055C0.901178 7.60837 0.968755 7.38873 1.1052 7.21283L1.18108 7.1269L2.55241 5.75557C2.62139 5.68634 2.70102 5.62863 2.78828 5.58461L2.87787 5.54622L6.34823 4.24346L9.24721 1.34539C9.14836 1.16057 9.11602 0.947384 9.1556 0.741555C9.19519 0.535725 9.3043 0.349749 9.46466 0.214777C9.62502 0.0798045 9.82689 0.00403397 10.0365 0.000156551C10.246 -0.00372086 10.4506 0.0654447 10.6158 0.194393Z'
      fill={isPinned ? '#148EFF' : '#A5A6A9'}
    />
  </svg>
);

export default PinIcon;
