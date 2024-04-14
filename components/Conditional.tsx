import type { ReactElement, ReactNode } from 'react'

interface ConditionalProps {
  condition: boolean;
  children: ReactNode;
}

function Conditional(props: ConditionalProps): ReactElement {
  const { condition, children } = props;

  return <>{Boolean(condition) && children}</>;
}

export default Conditional;
