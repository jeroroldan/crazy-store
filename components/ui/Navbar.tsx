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
    </AppBar>
  )
}

export default Navbar