'use client';

import { useCallback, useState } from 'react';

import Cropper from 'react-easy-crop';
import { toast } from 'react-toastify';

import * as S from './style';

import {
  useGetMyInfo,
  useGetMyMenteeInfo,
  usePostProfileImgUrl,
  usePostUploadFile,
} from '@/hooks';
import type { PostProfileImgType } from '@/types';

interface Props {
  imgUrl: string;
  closeModal: () => void;
}

interface CropType {
  x: number;
  y: number;
}

interface CroppedAreaType extends CropType {
  width: number;
  height: number;
}

const ProfileImgChange = ({ imgUrl, closeModal }: Props) => {
  const [crop, setCrop] = useState<CropType>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [croppedAreaPixels, setCroppedAreaPixels] =
    useState<CroppedAreaType | null>(null);

  const { mutate: mutateUploadFile } = usePostUploadFile();
  const { mutate: mutateProfileImgUrl } = usePostProfileImgUrl();
  const { refetch: refetchGetMyInfo } = useGetMyInfo();
  const { refetch: refetchGetMyMenteeInfo } = useGetMyMenteeInfo();

  const onCropComplete = useCallback(
    (_: unknown, croppedAreaPixel: CroppedAreaType) => {
      setCroppedAreaPixels(croppedAreaPixel);
    },
    []
  );

  const onError = () => toast.error('프로필 이미지 업로드에 실패했습니다.');

  const onCropButtonClick = async () => {
    const formData = new FormData();
    const profileImg = await getCroppedImg(imgUrl, croppedAreaPixels!);
    const convertImg = dataURLtoFile(profileImg, 'croppedImg.png');

    formData.append('file', convertImg);

    mutateUploadFile(formData, {
      onSuccess: ({ fileUrl }) => {
        const data: PostProfileImgType = {
          profileUrl: fileUrl,
        };

        mutateProfileImgUrl(data, {
          onSuccess: () => {
            toast.success('프로필 이미지 업로드에 성공했습니다.');
            refetchGetMyMenteeInfo();
            refetchGetMyInfo();
            closeModal();
          },
          onError: onError,
        });
      },
      onError: onError,
    });
  };

  const getCroppedImg = async (
    imageSrc: string,
    pixelCrop: CroppedAreaType
  ) => {
    const image = new Image();
    image.src = imageSrc;
    image.setAttribute('crossOrigin', 'anonymous');

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = image.width;
    canvas.height = image.height;

    ctx!.translate(image.width / 2, image.height / 2);
    ctx!.translate(image.width / -2, image.height / -2);
    ctx!.drawImage(image, 0, 0);

    const croppedCanvas = document.createElement('canvas');

    const croppedCtx = croppedCanvas.getContext('2d');

    croppedCanvas.width = pixelCrop.width;
    croppedCanvas.height = pixelCrop.height;

    croppedCtx!.drawImage(
      canvas,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    return croppedCanvas.toDataURL('image/png');
  };

  const dataURLtoFile = (dataUrl: string, filename: string) => {
    const arr = dataUrl.split(',');
    const mime = arr?.[0].match(/:(.*?);/)?.[1];
    const byteString = atob(arr[1]);
    let n = byteString.length;
    const uint8Array = new Uint8Array(n);
    while (n--) {
      uint8Array[n] = byteString.charCodeAt(n);
    }
    return new File([uint8Array], filename, { type: mime });
  };

  return (
    <>
      <S.DescriptionWrapper>
        <S.Description>5mb 이하의 파일</S.Description>
      </S.DescriptionWrapper>
      <S.CropperWrapper>
        <Cropper
          image={imgUrl}
          aspect={188 / 160}
          showGrid={false}
          crop={crop}
          onCropChange={setCrop}
          zoom={zoom}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
          style={{
            containerStyle: {
              width: '15.625rem',
              height: '13.3125rem',
              position: 'relative',
              borderRadius: '0.625rem',
            },
            cropAreaStyle: { color: 'rgb(0, 0, 0, 0.4)' },
          }}
        />
      </S.CropperWrapper>
      <S.Button onClick={onCropButtonClick}>확인</S.Button>
    </>
  );
};

export default ProfileImgChange;
