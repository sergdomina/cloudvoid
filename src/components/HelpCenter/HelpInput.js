import { HelpInputStyle } from './HelpCenter.styled';
const HelpInput = ({ handleInput, filter }) => {
  return (
    <HelpInputStyle
      onChange={handleInput}
      value={filter}
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      placeholder="Search in Help Center"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
  );
};
export default HelpInput;
