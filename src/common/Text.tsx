import styled from 'styled-components';

type TextProps = {
  size: string;
  color: string;
  weight: number;
  lineHeight: string;
  children: any;
};

interface TextStyles {
  size: string;
  color: string;
  weight: number;
  lineHeight: string;
}

export default function Text(props: TextProps) {
  const { size, color, weight, lineHeight, children } = props;

  const styles = {
    color,
    size,
    weight,
    lineHeight,
  };

  return <P {...styles}>{children}</P>;
}

Text.defaultProps = {
  size: '14px',
  color: '#333c45',
  weight: 400,
  lineHeight: '1.3em',
  children: null,
};

const P = styled('p')<TextStyles>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: -0.04em;
`;
