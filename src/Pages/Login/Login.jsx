import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { Box, Checkbox } from '@mui/joy';
import GoogleIcon from '../../Components/Ui/GoogleIcon/GoogleIcon';
import Divider from '@mui/joy/Divider';
import FontLogin from '../../assets/FontLogin.jpg'
import ControlForm from '../../Components/Ui/FormControl/FormContol';
import './Login.css'

export default function Login() {
    return (
        <div className='Container-Login-Form'>
            <form action="#" className='Form-Login'>
                <Box >
                    <Typography level='h3' sx={{mb: 1}}> Sign in</Typography>
                    <Typography level='body-md'>Ready to explore ChatUp?
                        <Link level='title-sm' marginLeft={'5px'}>  Sing up!</Link> </Typography>
                </Box>

                <Button sx={{
                    gap: "10px", background: "none", ":hover": {
                        background: "#c4d2e885"
                    },
                    mt: 2,
                    mb: 1
                }}>
                    <GoogleIcon />
                    <Typography level='body-sm'> Continue with Google</Typography>
                </Button>

                <Divider sx={{ mt: 1 }}>
                    or
                </Divider>

                <ControlForm name={'Email'} type={'email'} placeholder={'johndoe@email.com'} />
                <ControlForm name={'Password'} type={'password'} placeholder={'password'} />
                <Button sx={{ mt: 2, mb: 1 }}>Sign in</Button>

                <FormControl sx={{display: 'flex', flexDirection: 'row',  mt: 2,  justifyContent: "space-between"}}>
                    <FormLabel sx={{display: 'flex'}}> 
                        <Checkbox size='sm' />
                        <Typography level='body-sm' marginLeft={'5px'}> Remember me </Typography>
                    </FormLabel>

                    <Typography level='body-sm' >
                        <Link> Forgot your password? </Link>
                    </Typography>
                </FormControl>
            </form>

            <img src={FontLogin} alt="" className='Font-login' />
        </div>
    );
}
