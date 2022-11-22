// component
import SvgColor from '../../../components/svg-color';


// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Dashboard',
    path: '/dashboard/app',
    icon: icon('dashboard'),
  },
  {
    title: 'Global Search',
    path: '/globalsearch',
    icon: icon('Global'),
  },
  {
    title: 'Closed/Report',
    path: '/closed/report',
    icon: icon('Reports'),
  },
  {
    title: 'Administration',
    path: 'administration',
    icon: icon('Admin'),
  },
  {
    title: 'Start Info Case',
    path: '/start-info-case',
    icon: icon('case-study-icon'),
  },
];

export default navConfig;
