import styled from 'styled-components';

interface GridStyle {
  flex: boolean;
  column: boolean;
  align: string;
  justify: string;
  width: string;
  padding: string;
  margin: string;
  position: string;
  top: string;
  left: string;
  overflowX: string;
  overflowY: string;
}

interface GridProps extends GridStyle {
  children: JSX.Element | JSX.Element[] | boolean | Element;
}

const Grid = (props: GridProps) => {
  const { flex, column, align, justify, width, padding, margin, position, top, left, overflowX, overflowY, children } = props;

  const styles = {
    flex,
    column,
    align,
    justify,
    width,
    padding,
    margin,
    position,
    top,
    left,
    overflowX,
    overflowY,
  };

  return <ElGrid {...styles}>{children}</ElGrid>;
};

Grid.defaultProps = {
  flex: false,
  column: false,
  align: 'center',
  justify: 'center',
  width: '100%',
  padding: '0',
  margin: '0',
  position: '',
  top: '0',
  left: '0',
  overflowX: '',
  overflowY: '',
  children: null,
};

const ElGrid = styled('div')<GridStyle>`
  width: ${(props) => props.width};
  ${(props) => props.flex && 'display: flex;'};
  ${(props) => props.column && 'flex-direction: column;'};
  ${(props) => props.align && `align-items: ${props.align};`}
  ${(props) => props.justify && `justify-content: ${props.justify};`};
  ${(props) => props.padding && `padding: ${props.padding};`}
  ${(props) => props.margin && `margin: ${props.margin};`}
  ${(props) => props.position && `position: ${props.position};`};
  ${(props) => props.top && `top: ${props.top};`}
  ${(props) => props.left && `left: ${props.left};`}
  ${(props) => props.overflowX && `overflowX: ${props.overflowX};`}
  ${(props) => props.overflowY && `overflowY: ${props.overflowY};`}
`;

export default Grid;
