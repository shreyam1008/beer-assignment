import styled from "styled-components";

interface HeaderProps {
  title: string;
  image?: any;
}

const Header = (props: HeaderProps) => {
  const { title, image } = props;
  return (
    <S.HeaderContainer>
      <S.HeaderImage>
        {image && <S.ImageContainer src={image} alt={title} />}
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
  HeaderImage: styled.div`
    margin: 0 2rem;
  `,
  ImageContainer: styled.img`
    height: 100px;
    width: 100px;
  `,
};
