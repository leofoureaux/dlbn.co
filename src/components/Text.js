import { Text as RebassText } from 'rebass';
import styled from 'styled-components';
import { variant, space, color } from 'styled-system';

const Text = styled(RebassText)`
  ${variant({
    variants: {
      primary: { color: 'white' },
      secondary: { color: 'silver' },
    },
  })}
  ${space}
  ${color}
`;

export default Text;
