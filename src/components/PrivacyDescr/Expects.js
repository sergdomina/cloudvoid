import { Title, List, Item, LinkToList } from './Expects.styled.js';

const Expects = () => {
  return (
    <>
      <Title>What you can expect from SEEYOU</Title>

      <List>
        <Item>We are a force for good</Item>
        <Item>We measure everything, always</Item>
        <Item>Relentless product focus that is information driven</Item>
        <Item>Simplicity</Item>
        <Item>Transparency</Item>
        <Item>Stability</Item>
      </List>

      <Title>What SEEYOU expects from you</Title>

      <List>
        <Item>
          You are 13 years or older unless you are using SEEYOU through your
          distant learning provider
        </Item>
        <Item>
          WThe age restrictions are higher in same areas – for full info see the
          age restriction list <LinkToList>(Link to list)</LinkToList>
        </Item>
        <Item>Show respect for other participants</Item>
        <Item>Participate in a positive manner</Item>
        <Item>Attempt collaboration before conflict</Item>
        <Item>Boost your communication by using SEEYOU frequently</Item>
        <Item>
          Provide as with your regular feedback on your SEEYOU experience to
          facility improvements
        </Item>
      </List>
    </>
  );
};
export default Expects;
