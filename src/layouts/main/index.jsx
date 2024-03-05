import { Stack } from '@mui/material';
import MainHeader from './MainHeader';
import { Outlet } from 'react-router-dom';
import MainFooter from './MainFooter';

export default function MainLayout() {
  return (
    <Stack sx={{ minHeight: 1 }}>
      <MainHeader />
      <Outlet />
      <MainFooter />
    </Stack>
  );
}
