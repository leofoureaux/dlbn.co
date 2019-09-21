import { Text as RebassText } from 'rebass';
import styled from 'styled-components';
import { variant } from 'styled-system';

const Text = styled(RebassText)(
  variant({
    variants: {
      primary: { color: 'white' },
      secondary: { color: 'silver' },
    },
  }),
);

export default Text;
