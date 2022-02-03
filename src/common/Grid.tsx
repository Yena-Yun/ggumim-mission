import styled from 'styled-components';

interface GridStyle {
  flex: boolean;
  column: boolean;
  align: string;
  justify: string;
  width: string;
  height: string;
  padding: string;
  margin: string;
  position: string;
  radius: string;
  shadow: string;
  overflow?: string;
  cursor?: string;
}

interface GridProps extends GridStyle {
  children: JSX.Element | JSX.Element[] | boolean | Element;
  _onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const Grid = (props: GridProps) => {
  const { flex, column, align, justify, width, height, padding, margin, position, radius, shadow, overflow, cursor, children, _onClick } =
    props;

  const styles = {
    flex,
    column,
    align,
    justify,
    width,
    height,
    padding,
    margin,
    position,
    radius,
    shadow,
    overflow,
    cursor,
  };

  return (
    <ElGrid {...styles} onClick={_onClick}>
      {children}
    </ElGrid>
  );
};

Grid.defaultProps = {
  flex: false,
  column: false,
  align: '',
  justify: '',
  width: '100%',
  height: 'auto',
  padding: '0',
  margin: '0',
  position: '',
  radius: '',
  shadow: '',
  overflow: '',
  cursor: '',
  children: null,
  _onClick: () => {},
};

const ElGrid = styled('div')<GridStyle>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => props.flex && 'display: flex;'};
  ${(props) => props.flex && 'display: flex;'};
  ${(props) => props.column && 'flex-direction: column;'};
  ${(props) => props.align && `align-items: ${props.align};`}
  ${(props) => props.justify && `justify-content: ${props.justify};`};
  ${(props) => props.padding && `padding: ${props.padding};`}
  ${(props) => props.margin && `margin: ${props.margin};`}
  ${(props) => props.position && `position: ${props.position};`};
  ${(props) => props.radius && `border-radius: ${props.radius};`}
  ${(props) => props.shadow && `box-shadow: ${props.shadow};`}
  ${(props) => props.overflow && `overflow: ${props.overflow};`}
  ${(props) => props.cursor && `cursor: ${props.cursor};`}
`;

export default Grid;
