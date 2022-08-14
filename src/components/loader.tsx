import styled from "styled-components";

const Loader = () => {
  return <S.Loader>↻</S.Loader>;
};

export default Loader;

const S = {
  Loader: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    font-weight: 600;
    color: gray;
    animation: spin 2s linear infinite;
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `,
};
