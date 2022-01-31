import styled from 'styled-components';

type GridProps = {
  flex: boolean;
  column: boolean;
  align: string;
  justify: string;
  width: string;
  padding: string;
  margin: string;
  relative: boolean;
  absolute: boolean;
  top: string;
  left: string;
  children: JSX.Element | JSX.Element[] | boolean | Element;
};

interface GridStyle {
  flex: boolean;
  column: boolean;
  align: string;
  justify: string;
  width: string;
  padding: string;
  margin: string;
  relative: boolean;
  absolute: boolean;
  top: string;
  left: string;
}

const Grid = (props: GridProps) => {
  const { flex, column, align, justify, width, padding, margin, relative, absolute, top, left, children } = props;

  const styles = {
    flex,
    column,
    align,
    justify,
    width,
    padding,
    margin,
    relative,
    absolute,
    top,
    left,
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
  relative: false,
  absolute: false,
  top: '0',
  left: '0',
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
  ${(props) => props.relative && 'position: relative;'};
  ${(props) => props.absolute && 'position: absolute;'};
  ${(props) => props.top && `top: ${props.top};`}
  ${(props) => props.left && `left: ${props.left};`}
`;

export default Grid;
