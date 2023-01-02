import {
  Title,
  Discription,
  Subtitle,
  CollectsDiscription,
  DiscriptionList,
  EmailLink,
} from './AboutThisPolicy.styled.js';

const AboutThisPolicy = () => {
  return (
    <>
      <Title>About this policy</Title>
      <Discription>
        This Privacy Policy applies to all services offered by SEEYOU Plc and
        its affiliates
      </Discription>

      <Subtitle>Retention</Subtitle>
      <Discription>
        We retain personal data for as long as required to engage in the uses
        described in this Privacy Policy, unless a longer retention period is
        required by applicable law.
      </Discription>

      <CollectsDiscription>
        The criteria used to determine our retention periods include the
        following:
      </CollectsDiscription>

      <DiscriptionList>
        <li>
          <CollectsDiscription>
            The length of time we have an ongoing relationship with you and
            provide SEEYOU Products to you (for example, for as long as you have
            an account with us or keep using our Products);
          </CollectsDiscription>
        </li>
        <li>
          <CollectsDiscription>
            Whether account owners modify or their users delete information
            through their accounts;
          </CollectsDiscription>
        </li>
        <li>
          <CollectsDiscription>
            Whether we have a legal obligation to keep the data (for example,
            certain laws require us to keep records of your transactions for a
            certain period of time before we can delete them); or
          </CollectsDiscription>
        </li>
        <li>
          <CollectsDiscription>
            Whether retention is advisable in light of our legal position (such
            as in regard to the enforcement of our agreements, the resolution of
            disputes, and applicable statutes of limitations, litigation, or
            regulatory investigation).
          </CollectsDiscription>
        </li>
      </DiscriptionList>
      <Subtitle>Changes to this policy</Subtitle>
      <Discription>
        We change this Privacy Policy from time to time. We will not reduce your
        rights under this Privacy Policy without your explicit consent. We
        always indicate the date the last changes were published and we offer
        access to archived versions for your review. If changes are significant,
        we’ll provide a more prominent notice (including, for certain services,
        email notification of Privacy Policy changes).
      </Discription>
      <Subtitle>Changes to this policy</Subtitle>
      <Discription>
        We change this Privacy Policy from time to time. We will not reduce your
        rights under this Privacy Policy without your explicit consent. We
        always indicate the date the last changes were published and we offer
        access to archived versions for your review. If changes are significant,
        we’ll provide a more prominent notice (including, for certain services,
        email notification of Privacy Policy changes).
      </Discription>
      <Subtitle>Contact info</Subtitle>
      <CollectsDiscription>
        To exercise your rights or if you have any privacy-related questions or
        comments related to this Privacy Policy, please send an email to&nbsp;
        <EmailLink>privacy@seeyou.eu.</EmailLink>
      </CollectsDiscription>
    </>
  );
};
export default AboutThisPolicy;
