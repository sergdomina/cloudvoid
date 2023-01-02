import styled from 'styled-components';
import Container from '../Container';

export const RewardedTitle = styled.h2`
  font-family: 'Jost';
  font-weight: 600;
  font-size: 30px;
  line-height: 1.5;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.black};
`;

export const RewardedDiscription = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 32px;
`;

export const RewardedContainer = styled(Container)`
  ${({ theme }) => theme.device.desktop} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LearnMore = styled.a`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.link};
`;
