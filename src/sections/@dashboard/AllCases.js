import * as React from 'react';
import Card from '@mui/material/Card';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Tab from '@mui/material/Tab';
import { Container } from '@mui/system';
import { Stack} from '@mui/material';
import CasesStatus from './Cases Status';
import Caselevels from './Caselevels';




const STATUS_OPTIONS = ["All Events"]


// const TABLE_HEAD = [
//     { id: 'Incident ID', label: 'incident id'},
//     { id: 'Quick Note', label: 'quick note '},
//     { id: 'Status Level', label: 'status level'},
//     { id: 'Down Time Start Date', label: 'down time start date'},
//     { id: 'Inbound Program', label: 'inbound program'},
//     { id: 'Servicing Dealer', label: 'servicing dealer'},
//     { id: 'Cust Name', label: 'cust name'},
//     { id: 'Unit#', label: 'unit#'},
//     { id: 'Caller Name', label: 'caller name'},
//     { id: 'Caller Phone', label: 'caller phone'},
//     { id: 'Awaiting Dispatch', label: 'awaiting dispatch'},
//     { id: 'Dispatched Time', label: 'dispatched time'},
//     { id: '' },
//   ];

export default function AllCases() {
  return (
// ----All Cases----
<>
<Container sx={{display: 'flex', mt: '-4px', ml: '-10px'}}>
    <Card sx={{ width: '250%', minHeight: 300, pt: 8.1}}>
    <Tabs
        sx={{
            px: 2,
            mt: '-64.8px',
            minHeight: '30px',
            backgroundColor: '#98C1D9',
          }}
        >
          <Typography sx={{
            pt: 0.5,
            mb: 0,
            font: 'normal normal 600 13px/27px Segoe UI',
             }}>
            Open Cases Events
          </Typography>
       
    </Tabs>
            {STATUS_OPTIONS.map((tab) => (
            <Tab sx={{pt: 0, textDecoration: 'underline', color: '#000000'}} key={tab} label={tab} value={tab} />
            ))}

        <CasesStatus
            Number='T005132'
            issues='Bridgestone Bandag breakdown'
            icon='fa-solid:calendar-alt'
            Date='10/21/2022 3:06:16 PM'
            img='/assets/icons/navbar/Icon awesome-user.svg'
            user='Sravan Dasari'
            imgs='/assets/icons/navbar/Icon ionic-md-call.svg'
            phone='0-123-123-123'
            Time='10mins'
        />
        <CasesStatus
            Number='T005132'
            issues='Bridgestone Bandag breakdown'
            icon='fa-solid:calendar-alt'
            Date='10/21/2022 3:06:16 PM'
            img='/assets/icons/navbar/Icon awesome-user.svg'
            user='Sravan Dasari'
            imgs='/assets/icons/navbar/Icon ionic-md-call.svg'
            phone='0-123-123-123'
            Time='10mins'
        />              
     </Card>

     

{/* ------Status------ */}

<Container>
{/* -------Open Cases------- */}

    <Card sx={{ width: '110%', minHeight: 100, pt: 2.1, right: -10, mt: 5}}>
        <Caselevels
        Number='10/50'
        icon='material-symbols:arrow-forward-ios'
        title='Open Case'
        img='/assets/icons/navbar/Mask Group 8.svg'
         />
    </Card>

{/* -------Follow Up------- */}

    <Card sx={{ width: '110%', minHeight: 100, pt: 2.1, left: 22, mt: 5}}>
        <Caselevels 
        Number='30/50'
        icon='material-symbols:arrow-forward-ios'
        title='Follow Up'
        img='/assets/icons/navbar/Mask Group 8.svg'
        />
    </Card>
</Container>

{/* -------Dispatched------- */}

<Container>
    <Card sx={{ width: '110%', minHeight: 100, pt: 2.1, right: -22, mt: 5}}>
        <Caselevels
        Number='05/50'
        icon='material-symbols:arrow-forward-ios'
        title='Dispatched'
        img='/assets/icons/navbar/Mask Group 8.svg'
        />
    </Card>

{/* -------Finished------- */}

    <Card sx={{ width: '110%', minHeight: 100, pt: 2.1, left: 22, mt: 5}}>
        <Caselevels
        Number='05/50'
        icon='material-symbols:arrow-forward-ios'
        title='Finished'
        img='/assets/icons/navbar/Mask Group 8.svg'
        />
    </Card>
</Container>
</Container>

{/* --------Table--------------- */}

<Container sx={{pt: '25px'}}>
<Card sx={{ width: '103%', minHeight: 420, pt: 8.1, ml: '-11px'}}>
    <Tabs
        sx={{
            px: 2,
            mt: -8.1,
            minHeight: '30px',
            backgroundColor: '#98C1D9',
          }}
        >
        <Stack 
        sx={{
            display: 'row',
            ml: '3px',
            mt: '7px',
            height: '18px',
            width: '18px',
            background: '#3D5A80 0% 0% no-repeat padding-box',
            borderRadius: '3px'
        }}>
            <Typography
            sx={{
                color: '#ffffff',
                font: 'normal normal 600 12px/18px Segoe UI',
                ml: '2px',
            }}
            >
                50
            </Typography>
        </Stack>
        <Stack sx={{ml: '6px'}}>
            <Typography sx={{
                font: 'normal normal 600 13px/24px Segoe UI',
                pt: '4px'
            }}>
                 All
            </Typography>
        </Stack>

        <Stack 
        sx={{
            display: 'row',
            mt: '7px',
            ml: '25px',
            height: '18px',
            width: '18px',
            background: '#3D5A80 0% 0% no-repeat padding-box',
            borderRadius: '3px'
        }}>
            <Typography
            sx={{
                color: '#ffffff',
                font: 'normal normal 600 12px/18px Segoe UI',
                ml: '2px',
            }}
            >
                07
            </Typography>
        </Stack>
        <Stack sx={{ml: '6px'}}>
            <Typography sx={{
                font: 'normal normal 600 13px/24px Segoe UI',
                pt: '4px'
            }}>
                 Open Cases
            </Typography>
        </Stack>

        <Stack 
        sx={{
            display: 'row',
            mt: '7px',
            ml: '25px',
            height: '18px',
            width: '18px',
            background: '#3D5A80 0% 0% no-repeat padding-box',
            borderRadius: '3px'
        }}>
            <Typography
            sx={{
                color: '#ffffff',
                font: 'normal normal 600 12px/18px Segoe UI',
                ml: '2px',
            }}
            >
                03
            </Typography>
        </Stack>
        <Stack sx={{ml: '6px'}}>
            <Typography sx={{
                font: 'normal normal 600 13px/24px Segoe UI',
                pt: '4px'
            }}>
                 Flag Cases
            </Typography>
        </Stack>

        <Stack 
        sx={{
            display: 'row',
            mt: '7px',
            ml: '25px',
            height: '18px',
            width: '18px',
            background: '#3D5A80 0% 0% no-repeat padding-box',
            borderRadius: '3px'
        }}>
            <Typography
            sx={{
                color: '#ffffff',
                font: 'normal normal 600 12px/18px Segoe UI',
                ml: '2px',
            }}
            >
                02
            </Typography>
        </Stack>
        <Stack sx={{ml: '6px'}}>
            <Typography sx={{
                font: 'normal normal 600 13px/24px Segoe UI',
                pt: '4px'
            }}>
                 Waiting Cases
            </Typography>
        </Stack>

        <Stack 
        sx={{
            ml: '56%',
            mt: '3px',
            backgroundColor: '#ffffff',
            width: '26px',
            height: '22px',
            borderRadius: '2px',

        }}>
        <img 
        style={{width: '15px', marginTop: '3px', marginLeft: '4px'}}
        alt='' 
        src='/assets/icons/navbar/MicrosoftTeams-image.png' 
        />

        </Stack>
    </Tabs>
    
    <Stack>
        <TableHead>
            <TableRow>
                <TableCell>Incident ID</TableCell>
                <TableCell align="right">Quick Note</TableCell>
                <TableCell align="right">Status Level</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Down Time Start Date</TableCell>
            </TableRow>
        </TableHead>
        </Stack>
    
</Card>

</Container>
</>
  );
}