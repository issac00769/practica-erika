import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { label: 'Home', icon: <SearchIcon /> },
  { label: 'About', icon: <ShoppingBagIcon /> },
  { label: 'Contact', icon: <PersonIcon /> }
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [text, setText] = React.useState("Gaming Online Shop");

  React.useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => (prevText === "Gaming Online Shop" ? "Trolleado" : "Gaming Online Shop"));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              {item.icon && <item.icon.type sx={{ mr: 2, display: { xs: 'none', sm: 'inline-block' } }} />}
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#191919', width: '100%' }}>
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: 56, sm: 70, md: 80 }, paddingX: 2 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {navItems.map((item) => (
              <Button key={item.label} sx={{ color: '#fff', display: 'flex', alignItems: 'center', fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                {item.icon && <item.icon.type sx={{ mr: 1, display: { xs: 'none', sm: 'inline-block' } }} />}
                <Typography variant="body1" sx={{ display: { xs: 'block', sm: 'none' } }}>
                  {item.label}
                </Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '0 5rem',
          height: '100vh',
          backgroundImage: 'url(https://getwallpapers.com/wallpaper/full/8/5/0/1036981-gears-of-war-hd-wallpaper-1920x1080-for-hd-1080p.jpg)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'left',
        }}
      >
        <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', fontSize: { xs: 'h4.fontSize', sm: 'h3.fontSize', lg: 'h2.fontSize' } }}>
          {text}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Vivamus tincidunt id est id eleifend. Nunc et enim interdum, commodo eros ac, pretium sapien. Curabitur eu placerat.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <Button variant="contained" color="primary">
            HOW WE WORK
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, flexDirection: 'column', gap: 1, position: 'fixed', top: '50%', left: 0, transform: 'translateY(-50%)', paddingLeft: 1 }}>
        <Typography variant="body2" sx={{ color: 'white', writingMode: 'vertical-rl', textOrientation: 'upright', marginBottom: 1 }}>
          Follow us
        </Typography>
        <IconButton color="inherit" href="https://facebook.com">
          <FacebookIcon />
        </IconButton>
        <IconButton color="inherit" href="https://twitter.com">
          <TwitterIcon />
        </IconButton>
        <IconButton color="inherit" href="https://instagram.com">
          <InstagramIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
