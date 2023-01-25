import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import Image from 'next/image'
import navImage from '../../public/todosCrazy.jpg';


const Navbar = () => {
  return (
    <AppBar className="image-fondo" sx={{ minHeight:'446px', position:'relative',display:'flex' ,alignItems:'center'  }}>
        <Image
          priority
          style={{ position:'absolute', objectFit:'cover' }}
          fill
          className="h-full w-full object-cover"
          src={navImage}
          placeholder="blur"
          alt="Coffee grinder"
        />
        <Box sx={{ position:'absolute', zIndex:'99', display:'flex', flexDirection:'column',textTransform:'uppercase',marginTop:'5px' ,alignItems:'center',  }}>
          <Typography variant="h1" component='h1' sx={{ fontSize: '52px', marginTop:'15px',padding:'10px' ,color:'blue' }}>Tienda de Licores Crazy</Typography>
          <Typography variant="subtitle1"  sx={{ marginTop:'3', zIndex:'99', fontSize:'22px' }}>Prepárate los mejores tragos del <span style={{ fontWeight: 800 }}>Verano</span></Typography>
        </Box>
      {/* <Toolbar sx={{  }}>
      </Toolbar> */}
    </AppBar>
  )
}

export default Navbar