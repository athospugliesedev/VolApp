import { Button, IButtonProps } from "native-base";
import { ReactNode } from "react";

interface ButtonProps extends IButtonProps{
  title: ReactNode,
  autoSize?: boolean,
  color?: string;

}

export default function ButtonVoll({ title, autoSize = false, color, ...rest}: ButtonProps) {
  return (
    <Button
    w={autoSize ? 'auto' : '100%'}
    bg={color || 'blue.800'}
    mt={5}
    borderRadius="lg"
    _text={{ color: 'white' }}
    {...rest}
    >
      {title}
    </Button>
  )
}