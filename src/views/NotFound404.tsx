import styled from "styled-components";

const NotFound404 = () => {
  return (
    <S.NotFoundContainer>
      Page Not Found..Have a Beer and try another link
    </S.NotFoundContainer>
  );
};

export default NotFound404;

const S = {
  NotFoundContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 2rem;
  `,
};
