import {
  HelpItem,
  HelpTile,
  HelpSubtitle,
  Helplink,
} from './HelpCenter.styled';
const HelpCenterItem = ({ item: { title, subtitle, excerpt, text } }) => {
  return (
    <HelpItem>
      <HelpTile>{title}</HelpTile>
      <HelpSubtitle>{subtitle}</HelpSubtitle>
      <HelpSubtitle>{excerpt}</HelpSubtitle>
      <Helplink>Lean more</Helplink>
    </HelpItem>
  );
};
export default HelpCenterItem;
