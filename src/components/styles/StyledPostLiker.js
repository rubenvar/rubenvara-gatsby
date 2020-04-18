import styled from 'styled-components';

const StyledPostLiker = styled.div`
  .post__liker {
    font-size: 0.85rem;
    border: none;
    box-shadow: none;
    background: none;
    padding: 3px 0;
    margin: 0;
    transition: all 0.25s;
    line-height: 1.15rem;
    > span {
      padding: 3px 6px;
      background: ${props => props.theme.grey200};
      margin-right: 14px;
      color: ${props => props.theme.grey800};
    }
  }
  p.post__liker {
    color: ${props => props.theme.grey600};
  }
`;

export default StyledPostLiker;
