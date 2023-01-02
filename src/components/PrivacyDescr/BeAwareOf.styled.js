import styled from 'styled-components';

export const Title = styled.h2`
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

export const DiscriptionList = styled.ul`
  list-style-type: disc;
  padding-left: 35px;
  margin-bottom: 43px;
`;

export const DiscriptionItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 20px;
  line-height: 1.35;

  color: ${({ theme }) => theme.colors.black_btn};
`;

export const Subtitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.descr.bold};
  font-size: 20px;
  line-height: 1.35;

  color: ${({ theme }) => theme.colors.black_btn};
`;

export const SubtitleEffective = styled.h3`
  font-family: ${({ theme }) => theme.fonts.descr.bold};
  font-size: 20px;
  line-height: 1.35;

  color: ${({ theme }) => theme.colors.black_btn};

  margin-bottom: 16px;
`;

export const EffectiveList = styled.ul`
  display: flex;
  margin-bottom: 80px;
  gap: 35px;
`;

export const EffectiveLink = styled.a`
  display: block;

  font-family: ${({ theme }) => theme.fonts.descr.semiBold};
  font-size: 16px;
  line-height: 1.25;

  color: ${({ theme }) => theme.colors.black_btn};

  border: 2px solid #303030;
  border-radius: 4px;

  padding: 14px 74px;
`;
