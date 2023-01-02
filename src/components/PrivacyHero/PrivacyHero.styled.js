import styled from 'styled-components';

export const HeroSection = styled.section`
  padding-top: 36px;
  padding-bottom: 45px;
  background: ${({ theme }) => theme.colors.privacy_bg};
`;

export const SectionTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title.semiBold};
  font-size: 50px;
  line-height: 1.44;
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
`;
