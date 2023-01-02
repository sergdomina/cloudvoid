import {
  Title,
  DiscriptionList,
  DiscriptionItem,
  Subtitle,
  Discription,
  SubtitleEffective,
  EffectiveList,
  EffectiveLink,
} from './BeAwareOf.styled.js';

const PrivacyExpects = () => {
  return (
    <>
      <Title>Be Aware of</Title>

      <Discription>
        SSEEYOU provide a powerful set of tools to enhance your communication in
        real time. Our free personal conference library enables you to store all
        the conferences that you have participated in including your
        time-stamped notes. Thus, creating a powerful tool for further
        communication. Sharing of conference videos raise issues related to Data
        Protection and more specifically breach of the individual participants
        consent. SEEYOU encourage the user not to share videos from conferences
        recorded via SEEYOU without consent from the other participants due to
        potential breach of Data Protection rules.
      </Discription>

      <Subtitle>
        This Privacy Policy is divided into the following sections:
      </Subtitle>

      <DiscriptionList>
        <DiscriptionItem>Information SEEYOU collects</DiscriptionItem>
        <DiscriptionItem>Why SEEYOU collect the information</DiscriptionItem>
        <DiscriptionItem>How SEEYOU protect the information</DiscriptionItem>
        <DiscriptionItem>How SEEYOU share the information</DiscriptionItem>
        <DiscriptionItem>
          How you can update, manage, export and delete the information
        </DiscriptionItem>
        <DiscriptionItem>
          Compliance and cooperation with regulators
        </DiscriptionItem>
        <DiscriptionItem>About this policy</DiscriptionItem>
      </DiscriptionList>

      <SubtitleEffective>
        SEEYOU Privacy Policy is effective as of April 1st 2022.
      </SubtitleEffective>
      <EffectiveList>
        <li>
          <EffectiveLink href="#">Download PDF</EffectiveLink>
        </li>
        <li>
          <EffectiveLink href="#">See Older Versions</EffectiveLink>
        </li>
      </EffectiveList>
    </>
  );
};
export default PrivacyExpects;
