import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import facebookLogo from '../../assets/FACEBOOK.png';
import instagramLogo from '../../assets/INSTAGRAM.png';
import xLogo from '../../assets/X.png';
import telegramLogo from '../../assets/TELEGRAM.png';
import redditLogo from '../../assets/REDDIT.png';
import linkedinLogo from '../../assets/LINKEDLIN.png';
import Logo from '../../components/Logo';
import Resource from '../../components/Resource';

const SOCIAL_LINKS = [
  {
    name: 'facebook',
    logo: facebookLogo,
    link: 'https://www.facebook.com/RIBDigital.Official',
  },
  {
    name: 'instagram',
    logo: instagramLogo,
    link: 'https://www.instagram.com/ribdigital_official',
  },
  {
    name: 'x',
    logo: xLogo,
    link: 'https://twitter.com/RIBDigital',
  },
  {
    name: 'telegram',
    logo: telegramLogo,
    link: 'https://t.me/RIB_Digital',
  },
  {
    name: 'linkedin',
    logo: linkedinLogo,
    link: 'https://www.linkedin.com/company/rib-digital',
  },
  {
    name: 'reddit',
    logo: redditLogo,
    link: 'https://www.reddit.com/user/RIB_Digital',
  },
];

const RESOURCES = [
  {
    title: 'Userful Links',
    links: ['How It Works', 'Transparency', 'Launchpad', 'News & Media'],
  },
  {
    title: 'Resources',
    links: ['FAQs', 'Whitepapers (REUR, ROYAL, RXAU)', 'Security Features', 'Knowledge Base'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Contact Us', 'Legal Terms'],
  },
  {
    title: 'Resources',
    links: ['Royal Euro (REUR)', 'Royal Dollar (ROYAL)', 'Royal Gold (RXAU)'],
  },
];

const RootStyle = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.grey['800'],
  padding: theme.spacing(12),
}));

export default function MainFooter() {
  return (
    <RootStyle direction="row">
      <Stack py={8} px={12} flexBasis="50%">
        <Box mb={6}>
          <Typography color="#fff" variant="h2">
            SECURE FOUNDATION WITH ON-CHAIN VERIFIABILITY
          </Typography>
        </Box>
        <Typography variant="body2" color="#fff">
          The foundation of RIB token is fortified by readily available Euro cash reserves. RIB token guarantees
          on-chain verification of its reserved funds, thereby removing the necessity for unquestioning reliance on
          statements provided by the issuer.
        </Typography>
      </Stack>

      <Stack gap={2} p={8} flexBasis="50%" direction="column">
        <Stack direction="row">
          <Resource title={RESOURCES[0].title} links={RESOURCES[0].links} />
          <Resource title={RESOURCES[1].title} links={RESOURCES[1].links} />
          <Box></Box>
        </Stack>

        <Stack direction="row">
          <Resource title={RESOURCES[0].title} links={RESOURCES[0].links} />
          <Resource title={RESOURCES[1].title} links={RESOURCES[1].links} />
          <Box></Box>
        </Stack>

        <Stack direction="row" gap={2}>
          {SOCIAL_LINKS.map(({ link, name, logo }) => (
            <Logo key={name} link={link} image={logo} />
          ))}
        </Stack>
      </Stack>
    </RootStyle>
  );
}
