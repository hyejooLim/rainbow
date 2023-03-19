import styled from 'styled-components';

export const TDlistBlock = styled.div`
  flex: 1; // 차지할 수 있는 영역 모두 차지 (부모 컴포넌트도 flex box이어야 함)
  padding: 20px 30px;
  max-height: 265px;
  overflow-y: auto;
`;
