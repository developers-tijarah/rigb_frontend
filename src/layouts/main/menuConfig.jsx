// locals
import { routes } from '../../routes/paths';
// components
import Iconify from '../../components/Iconify';
// ----------------------------------------------------------------------------------------------------

const menuConfig = routes.map(({ title, to, icon }) => ({
  title,
  to,
  icon: <Iconify icon={icon} height={22} width={22} />,
}));

export default menuConfig;
