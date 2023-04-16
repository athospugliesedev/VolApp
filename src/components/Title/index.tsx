import { Text, ITextProps } from 'native-base'
import { ReactNode } from 'react';

interface TitleProps extends ITextProps {
  title: ReactNode
}

export function Title({title, ...rest}: TitleProps) {
  return (
    <Text
    fontSize="2xl"
    fontWeight="bold"
    alignItems="center"
    mt={5}
    color="gray.500"
    {...rest}
    >
      {title}
    </Text>
  );
}