import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Button } from '@mui/material';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// components
import Iconify from '../../../components/iconify';
import account from '../../../_mock/account';
//
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import SvgColor from '../../../components/svg-color';

import NotificationsPopover from './NotificationsPopover';



// ----------------------------------------------------------------------

const NAV_WIDTH = 220;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 55;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  background: '#293241',
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 2),
  },
}));

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({ onOpenNav }) {
  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: 'text.primary',
            display: { lg: 'none' },
          }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
    
        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
        <Button
          variant="contained"  
          sx={{backgroundColor: 'coral', px: 3, py: 0.2}}
         >
            New Case
        </Button> 

        {/* <input
          type="search"
          placeholder="Search..."
        /> */}
        {/* <Iconify icon="eva:search-fill" /> */}
          <Searchbar/>
          {/* <LanguagePopover /> */}
          <Iconify icon="el:phone-alt"/>
          {/* <NotificationsPopover /> */}
          <Iconify icon="bxs:notification"/>
          <AccountPopover />
          <Iconify icon="eva:more-vertical-fill" />
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
