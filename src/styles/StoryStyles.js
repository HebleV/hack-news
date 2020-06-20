import styled from 'styled-components';

export const StoryWrapper = styled.section`
  padding-top: 0px;
  margin-bottom: 0px;
  border-top: 1px solid #cccccc;

  &:first-of-type {
    border-top: 0;
  }
  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }
  &:nth-child(odd) {
    background-color:#efebe9;
  }
  &:nth-child(even) {
    background-color:#eae4e1;
  }

`;

export const StoryTitle = styled.h1`
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 1.8;
  margin: 0;
  text-decoration: none;
  a {
    color: #2e2e2c;
    background-color: #f8dc3d;
    text-decoration: none;
  }
`;

export const StoryMeta = styled.div`
  font-style: italic;
  > span:first-child {
    margin-right: 10px;
  }
  > span:not(:first-child):before {
    content: '•'
    margin: 0 7px;
  }
  .story__meta-bold {
    font-weight: bold;
  }
`;

export const StoryMetaElement = styled.span`
  font-weight: normal;
  font-size:12px;
  color: ${props => props.color};
`;

export const StoryText = styled.p`
  font-size:12px;
  display:inline-block;
  padding:0px 30px;
  a {
    color: #2e2e2c;
    text-decoration: none;
  }
`;