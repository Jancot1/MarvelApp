import { Box } from "@mui/system"
import { NavBar } from "../../ui";

export const MarvelLayout = ({children}) => {
  return (
    <Box sx= {{ display: 'flex' }}> 
      <NavBar />
      <Box 
        component='main'
        sx={{ flexGrow: 1, p: 3 }}
      >
        {children}
      </Box>
    </Box>
  )
}
