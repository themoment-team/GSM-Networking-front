/**
 * 문자열에서 특정 문자열 사이의 문자열을 추출하는 함수.
 * param으로 받는 keyword는 추출 대상 문자열에 포함되지 않음.
 *
 * @param string 추출 대상 문자열
 * @param startKeyword 추출을 시작할 문자열 (해당 문자열은 반환 문자열에 포함 되지 않음)
 * @param endKeyword 추출을 종료할 문자열 (해당 문자열은 반환 문자열에 포함 되지 않음)
 */
const extractSubstring = (
  string: string,
  startKeyword: string,
  endKeyword: string
) => {
  const startIndex = string.indexOf(startKeyword) + startKeyword.length;
  const endIndex =
    string.substring(startIndex).indexOf(endKeyword) + startIndex;
  return string.substring(startIndex, endIndex);
};

export default extractSubstring;
