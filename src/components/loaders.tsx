import styled from "styled-components";

const PageLoader: React.FC = () => {
  return <S.Loader>↻</S.Loader>;
};

export default PageLoader;

export const LoadingButton: React.FC = () => {
  return <S.LoadingButton>↻</S.LoadingButton>;
};

const S = {
  Loader: styled.div`
    height: 100vh;
    width: 100vw;
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
  LoadingButton: styled.button`
    background-color: white;
    border: none;
    font-size: 20px;
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
