import { useState } from 'react';
import {
  HelpSection,
  SectionTitle,
  HelpContainer,
  HelList,
  HelpBox,
} from './HelpCenter.styled';
import HelpCenterItem from './HelpCenterItem';
import Container from '../Container';
import HelpInput from './HelpInput';
import { ReactComponent as SearchIcon } from 'image/search.svg';
import { posts } from './posts';

const HelpCenter = () => {
  const [filter, setFilter] = useState('');
  const filterHelpPost = () => {
    return posts.filter(post =>
      post.subtitle.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredHelpPosts = filterHelpPost();
  return (
    <section>
      <HelpSection>
        <Container>
          <SectionTitle>Help Center</SectionTitle>
          <HelpBox>
            <HelpInput
              handleInput={({ currentTarget }) =>
                setFilter(currentTarget.value)
              }
            />
            <SearchIcon />
          </HelpBox>
        </Container>
      </HelpSection>
      <HelpContainer>
        <HelList>
          {filteredHelpPosts.map(item => (
            <HelpCenterItem key={item.title} item={item} />
          ))}
        </HelList>
      </HelpContainer>
    </section>
  );
};
export default HelpCenter;
