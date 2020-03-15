import { Link } from 'gatsby';
import styled from 'styled-components';

const ButtonLink = styled(Link)`
  display: table;
  text-decoration: none;
  background: ${props => props.theme.grey400};
  color: ${props => props.theme.primary100};
  border-radius: ${props => props.theme.buttonRadius};
  padding: 6px 16px;
  margin: 18px 0;
  box-shadow: ${props => props.theme.shadow200};
  font-size: 0.8rem;
  transition: all 0.25s;
  &:hover {
    background: ${props => props.theme.primary200};
    color: ${props => props.theme.grey400};
    box-shadow: ${props => props.theme.shadow100};
  }
`;

export default ButtonLink;
