import styled from 'styled-components';

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.semiBold};
  font-size: 40px;
  line-height: 1.45;

  color: ${({ theme }) => theme.colors.black_btn};

  margin-bottom: 27px;
`;

export const List = styled.ul`
  list-style-type: disc;
  padding-left: 35px;
  margin-bottom: 43px;
`;

export const Item = styled.li`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 20px;
  line-height: 1.35;

  color: ${({ theme }) => theme.colors.black_btn};
`;

export const LinkToList = styled.a`
  color: ${({ theme }) => theme.colors.link};
`;
export const DiscriptionSubtitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.descr.bold};
  font-size: 20px;
  line-height: 1.35;

  color: ${({ theme }) => theme.colors.black_btn};
`;
