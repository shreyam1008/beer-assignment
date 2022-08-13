import styled from "styled-components";

interface HeaderProps {
  title: string;
  imageUrl?: string;
}

const Header = (props: HeaderProps) => {
  const { title, imageUrl } = props;
  return (
    <S.HeaderContainer>
      <S.HeaderImage>
        {imageUrl && <S.ImageContainer src={imageUrl} alt={title} />}
      </S.HeaderImage>
      <S.HeaderText>{title}</S.HeaderText>
    </S.HeaderContainer>
  );
};

export default Header;

const S = {
  HeaderContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  HeaderText: styled.h1`
    font-size: 2rem;
    font-weight: 700;
  `,
  HeaderImage: styled.div``,
  ImageContainer: styled.img`
    height: 100px;
    width: 100px;
  `,
};
