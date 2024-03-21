import { Icon } from '@iconify/react';

// ----------------------------------------------------------------------------------------------------

export default function Iconify({ icon, ...rest }) {
  return <Icon icon={icon} {...rest} />;
}
