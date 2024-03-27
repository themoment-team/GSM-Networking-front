'use client';

import * as S from './style';

import {
  FormItemWrapper,
  Header,
  InputFormItem,
  SelectFormItem,
  SubFunctionHeader,
} from '@/components';

const CommunityWrite = () => (
  <>
    <Header />
    <S.Container>
      <SubFunctionHeader prevPath='/community' title='글 작성' />
      <S.Form>
        <S.FormFieldsWrapper>
          <SelectFormItem
            // value={watch('category')}
            value={'글 카테고리'}
            options={['전공', '스포츠']}
            selectTitle='카테고리'
            defaultValue={'글 카테고리'}
          />
          <InputFormItem inputTitle='제목' placeholder='50자 이내' />
          <FormItemWrapper title='내용'>
            <S.Textarea placeholder='1000자 이내' isError={false} />
          </FormItemWrapper>
        </S.FormFieldsWrapper>
        <S.NextButton type='submit'>다음</S.NextButton>
      </S.Form>
    </S.Container>
  </>
);

export default CommunityWrite;
