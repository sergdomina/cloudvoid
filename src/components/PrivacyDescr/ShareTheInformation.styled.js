import styled from 'styled-components';

export const Discription = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 20px;
  line-height: 1.35;

  color: ${({ theme }) => theme.colors.black_btn};
  margin-bottom: 43px;
`;

export const DiscriptionList = styled.ul`
  list-style-type: disc;
  padding-left: 29px;
  margin-bottom: 27px;
`;

export const ShareList = styled.ul`
  list-style-type: disc;
  padding-left: 29px;
  margin-bottom: 60px;
`;

export const InformationList = styled(DiscriptionList)`
  list-style-type: disc;
  padding-left: 29px;
  margin-bottom: 0px;
`;

export const CollectsTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title.semiBold};
  font-size: 30px;
  line-height: 1.43;

  color: ${({ theme }) => theme.colors.primaryText};

  margin-bottom: 27px;
`;

export const Subtitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.descr.bold};
  color: ${({ theme }) => theme.colors.black_btn};

  font-size: 20px;
  line-height: 1.35;

  margin-bottom: 27px;
`;

export const CollectsDiscription = styled(Discription)`
  margin-bottom: 0px;
`;
