import {
  Discription,
  DiscriptionRed,
  DiscriptionList,
  DiscriptionItem,
  EffectiveList,
  EffectiveLink,
  CollectsTitle,
  CollectsBox,
  CollectsDiscription,
  ProjectsDiscription,
  FollowingList,
  FollovingDiscription,
} from './Collects.styled';
import { ReactComponent as Read } from './read.svg';

const Collects = () => {
  return (
    <>
      <CollectsTitle>Information SEEYOU Collects</CollectsTitle>
      <CollectsBox>
        <Discription>
          We want you to understand the types of information we collect as you
          use our services. We collect information to provide better services to
          all our users. The information SEEYOU collects, and how that
          information is used, depends on how you use our services and how you
          manage your privacy controls.
          <DiscriptionRed>
            I DO NOT KNOW HOW THIS IS DEALT WITH IN SEEYOU. WHAT PRIVACY
            CONTROLS DO WE HAVE?
          </DiscriptionRed>
        </Discription>

        <Read />
      </CollectsBox>

      <CollectsDiscription>
        We may collect, or process the following categories of personal data
        when you use or interact with SEEYOU Products:
      </CollectsDiscription>

      <DiscriptionList>
        <DiscriptionItem>
          Account Information: Information associated with an account that
          licenses SEEYOU Products, which may include administrator name,
          contact information, account ID, billing information, and account plan
          information
        </DiscriptionItem>
        <DiscriptionItem>
          Profile and Participant Information: Information associated with the
          SEEYOU profile of a user who uses SEEYOU Products under a licensed
          account or that is provided by an unlicensed participant joining a
          meeting, which may include name, display name, picture, email address,
          phone number, job information, stated locale, user ID, or other
          information provided by the user or their account owner.
        </DiscriptionItem>
        <DiscriptionItem>
          Contacts and Calendar Integrations: Contact information added by
          accounts or their users to create contact lists on SEEYOU, which may
          include contact information a user integrates from a third-party app.
          Users can also integrate their calendars from other services with
          their SEEYOU profile or account.
        </DiscriptionItem>
        <DiscriptionItem>
          Settings: Information associated with the preferences and settings on
          the account or user profile, which may include audio and video
          settings, recording file location, screen sharing settings, and other
          settings and configuration information.
        </DiscriptionItem>
        <DiscriptionItem>
          Registration Information: Information people provide when registering
          for a SEEYOU meeting, webinar or recording, which may include name and
          contact information, responses to registration questions, and other
          registration information requested by the host.
        </DiscriptionItem>
        <DiscriptionItem>
          Device Information: Information about the computers, phones, and other
          devices people use when interacting with SEEYOU Products, which may
          include information about the speakers, microphone, camera, OS
          version, hard disk ID, PC name, MAC address, IP address (which may be
          used to infer general location at a city or country level), device
          attributes (like operating system version and battery level), WiFi
          information, and other device information (like Bluetooth signals).
        </DiscriptionItem>
        <DiscriptionItem>
          Meeting, Webinar, and Messaging Content and Context: Content generated
          in meetings, webinars, or messages that are hosted on SEEYOU Products,
          which may include audio, video, in-meeting messages, chat messaging
          content, transcriptions, written feedback, responses to polls and Q&A,
          and files, as well as related context, such as invitation details,
          meeting or chat name, or meeting agenda. Content may contain your
          voice and image, depending on the account owner’s settings, what you
          choose to share, your settings, and what you do on SEEYOU Products.
        </DiscriptionItem>
        <DiscriptionItem>
          Product and Website Usage: Information about how people and their
          devices interact with SEEYOU Products, such as: when participants join
          and leave a meeting; whether participants sent messages and who they
          message with; performance data; mouse movements, clicks, keystrokes or
          actions (such as mute/unmute or video on/off), and other user inputs
          that help SEEYOU to understand feature usage, improve product design,
          and suggest features; which third-party apps users add to a meeting or
          other Product and what information and actions the app is authorized
          to access and perform; features used (such as screen sharing, emojis,
          or filters); and other usage information and metrics. This also
          includes information about when and how people visit and interact with
          SEEYOU’s websites, including what pages they accessed, their
          interaction with the website features, and whether or not they signed
          up for a SEEYOU Product.
        </DiscriptionItem>
        <DiscriptionItem>
          Communications with SEEYOU: Information about your communications with
          SEEYOU, including relating to support questions, your account, and
          other inquiries.
        </DiscriptionItem>
        <DiscriptionItem>
          Information from Partners: SEEYOU obtains information about account
          owners and their users from third-party companies, such as market data
          enrichment services, including information about an account owner’s
          company size or industry, contact information, or activity of certain
          enterprise domains.
        </DiscriptionItem>
      </DiscriptionList>

      <CollectsTitle>Why SEEYOU collects the information</CollectsTitle>
      <CollectsDiscription>
        SEEYOU is dedicated to improving our products and deliver the best user
        experience. We are very pleased that our users have trusted us to be
        their supplier. When using SEEYOU, you are trusting us with your
        information. SEEYOU employees do not access meeting, webinar, or
        messaging content (specifically, audio, video, files, and messages)
        unless directed by an account owner, or as required for legal, safety,
        or security reason. SEEYOU use the information we collect from all our
        services for the following purposes:
      </CollectsDiscription>
      <DiscriptionList>
        <DiscriptionItem>Provide our services</DiscriptionItem>
        <DiscriptionItem>Maintain our services</DiscriptionItem>
        <DiscriptionItem>
          We measure performance to improve our services through product
          research and development
        </DiscriptionItem>
        <DiscriptionItem>Marketing and promotions</DiscriptionItem>
        <DiscriptionItem>
          Authentication, Integrity, Security and Safety
        </DiscriptionItem>
        <DiscriptionItem>Communicate with You</DiscriptionItem>
        <DiscriptionItem>Legal reasons</DiscriptionItem>
      </DiscriptionList>

      <ProjectsDiscription>
        SEEYOU uses advanced tools to automatically scan content such as virtual
        backgrounds, profile images, and files uploaded or exchanged through
        chat, for the purpose of detecting and preventing violations of our
        terms or policies and illegal or other harmful activity, and its
        employees may investigate such content where required for legal, safety,
        or security reasons.
      </ProjectsDiscription>

      <CollectsTitle>How SEEYOU protects the information</CollectsTitle>
      <CollectsDiscription>
        SEEYOU is dedicated to protection your information. That is why we have
        the following encryption:
      </CollectsDiscription>
      <FollowingList>
        <li>
          <CollectsDiscription>
            Video, voice and text messages are end-to-end encrypted
          </CollectsDiscription>
        </li>
        <li>
          <CollectsDiscription>
            Sticky notes are fully encrypted and time-stamped
          </CollectsDiscription>
        </li>
      </FollowingList>
      <FollovingDiscription>
        For further information regarding encryption:
      </FollovingDiscription>
      <EffectiveList>
        <li>
          <EffectiveLink href="#">Watch Video</EffectiveLink>
        </li>
        <li>
          <EffectiveLink href="#">Read White Paper</EffectiveLink>
        </li>
      </EffectiveList>
    </>
  );
};
export default Collects;
