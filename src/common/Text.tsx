import styled from 'styled-components';

type TextProps = {
  bold: boolean;
  color: string;
  size: string;
  lineHeight: string;
  children: string | null;
};

interface TextStyles {
  bold: boolean;
  color: string;
  size: string;
  lineHeight: string;
}

export default function Text(props: TextProps) {
  const { bold, color, size, lineHeight, children } = props;

  const styles = {
    bold,
    color,
    size,
    lineHeight,
  };

  return <P {...styles}>{children}</P>;
}

Text.defaultProps = {
  bold: false,
  color: '#333c45',
  size: '14px',
  lineHeight: '1.3em',
  children: null,
};

const P = styled('p')<TextStyles>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  line-height: ${(props) => props.lineHeight};
`;
