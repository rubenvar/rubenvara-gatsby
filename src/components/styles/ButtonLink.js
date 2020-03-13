import { Link } from 'gatsby';
import styled from 'styled-components';

const ButtonLink = styled(Link)`
  display: table;
  text-decoration: none;
  background: ${props => props.theme.redLighter};
  color: ${props => props.theme.black};
  border-radius: ${props => props.theme.buttonRadius};
  padding: 6px 16px;
  margin: 18px 0;
  box-shadow: ${props => props.theme.buttonShadow};
  font-size: 0.8rem;
  &:hover {
    background: ${props => props.theme.red};
    color: ${props => props.theme.white};
  }
`;

export default ButtonLink;
