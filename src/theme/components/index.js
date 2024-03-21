import Drawer from './Drawer';
import { Input } from './Input';
import Link from './Link';
import List from './List';
import Paper from './Paper';
import { Progress } from './Progress';
import { Typography } from './Typography';

export default function componentsOverrides(theme) {
  return Object.assign(
    Link(theme),
    List(theme),
    Drawer(theme),
    Paper(theme),
    Typography(theme),
    Progress(theme),
    Input(theme)
  );
}
