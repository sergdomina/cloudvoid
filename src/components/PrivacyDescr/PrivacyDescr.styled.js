import styled from 'styled-components';

export const PrivacySection = styled.section`
  padding-top: 80px;
  padding-bottom: 68px;
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.semiBold};
  font-size: 40px;
  line-height: 1.45;

  color: ${({ theme }) => theme.colors.black_btn};

  margin-bottom: 27px;
`;

export const Discription = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 20px;
  line-height: 1.35;

  color: ${({ theme }) => theme.colors.black_btn};
  margin-bottom: 43px;
`;
