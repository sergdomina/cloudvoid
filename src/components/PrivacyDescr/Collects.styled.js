import styled from 'styled-components';

export const Discription = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 20px;
  line-height: 1.35;

  color: ${({ theme }) => theme.colors.black_btn};
  margin-bottom: 43px;
`;
export const DiscriptionRed = styled(Discription)`
  color: red;
  text-transform: uppercase;
`;
export const DiscriptionList = styled.ul`
  list-style-type: disc;
  padding-left: 29px;
  margin-bottom: 27px;
`;

export const DiscriptionItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 20px;
  line-height: 1.35;

  color: ${({ theme }) => theme.colors.black_btn};
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

export const CollectsTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title.semiBold};
  font-size: 30px;
  line-height: 1.43;

  color: ${({ theme }) => theme.colors.primaryText};

  margin-bottom: 27px;
`;

export const CollectsBox = styled.div`
  display: flex;
  p {
    flex-basis: 74%;
    margin-bottom: 0;
  }
  margin-bottom: 42px;
`;

export const CollectsDiscription = styled(Discription)`
  margin-bottom: 0px;
`;

export const ProjectsDiscription = styled(Discription)`
  margin-bottom: 27px;
`;
export const FollowingList = styled.ul`
  margin-bottom: 80px;
`;

export const FollovingDiscription = styled(Discription)`
  margin-bottom: 51px;
`;
