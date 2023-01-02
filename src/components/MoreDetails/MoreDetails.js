import {
  RewardedTitle,
  RewardedDiscription,
  RewardedContainer,
  LearnMore,
} from './MoreDetails.styled';
import GlobalSection from '../Section';
import GlobalBox from '../GlobalBox';
import GlobalImage from '../GlobalImage';

const MoreDetails = () => {
  return (
    <GlobalSection>
      <RewardedContainer>
        <GlobalImage
          url={
            'https://images.pexels.com/photos/8563042/pexels-photo-8563042.jpeg?cs=srgb&dl=pexels-valeria-boltneva-8563042.jpg&fm=jpg'
          }
        />
        <GlobalBox>
          <RewardedTitle>
            Get rewarded for using and sharing SEEYOU
          </RewardedTitle>
          <RewardedDiscription>
            SEEYOU helps to streamline the conferencing communication and gives
            it’s users the opportunity to co-own for usage and sharing
          </RewardedDiscription>
          <LearnMore> LearnMore</LearnMore>
        </GlobalBox>
      </RewardedContainer>
    </GlobalSection>
  );
};
export default MoreDetails;
