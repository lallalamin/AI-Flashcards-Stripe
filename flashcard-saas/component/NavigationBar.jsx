import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function CustomAppBar() {
    return (
        <AppBar position="static" className="nav-bar" sx={{ backgroundColor:'white'}}>
            <Toolbar className="tool-bar">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="\logo.png" width="50px"></img>
                    <Typography className="logo-title" component="a" href="/" variant="h6" sx={{  textDecoration: 'none', color: 'black', paddingLeft: '10px'}}>
                        BrainCards
                    </Typography>
                </div>
                <div>
                    <Button color="inherit" href="#Pricing" className="nav-item" sx={{ color:'black'}}>Pricing</Button>
                    <Button color="inherit" href="#About" className="nav-item" sx={{ color:'black'}}>About</Button>
                    <Button color="inherit" href="/resources" className="nav-item" sx={{ color:'black'}}>Resource</Button>
                    <Button color="inherit" href="/contact" className="nav-item" sx={{ color:'black'}}>Contact</Button>    
                </div>
                <div>
                    <SignedOut>
                        <Button color="inherit" href="/sign-up" className="button-white">Sign Up</Button>
                        <Button color="inherit" href="/sign-in" className="button-blue">Login</Button>
                    </SignedOut>
                    <SignedIn>
                        <Button color="inherit" href="/flashcards" sx={{ mr: 2, backgroundColor: '#2E46CD', color: 'white', fontWeight: 600, borderRadius: '10px', padding: '5px 15px 5px 15px', marginLeft: '10px','&:hover': {backgroundColor: '#1565C0',}, }}>My Cards</Button>
                        <UserButton />
                    </SignedIn>
                </div>
                
            </Toolbar>
        </AppBar>
    );
}