import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function CustomAppBar() {
    return (
        <AppBar position="static" className="nav-bar">
            <Toolbar className="tool-bar">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="\logo.png" width="50px"></img>
                    <Typography className="logo-title" component="a" href="/" variant="h6" sx={{  textDecoration: 'none', color: 'black', paddingLeft: '10px'}}>
                        BrainCards
                    </Typography>
                </div>
                <div>
                    <Button color="inherit" href="/pricing" className="nav-item">Pricing</Button>
                    <Button color="inherit" href="/about" className="nav-item">About</Button>
                    <Button color="inherit" href="/resources" className="nav-item">Resource</Button>
                    <Button color="inherit" href="/contact" className="nav-item">Contact</Button>    
                </div>
                <div>
                    <SignedOut>
                        <Button color="inherit" href="/sign-up" className="button-white">Sign Up</Button>
                        <Button color="inherit" href="/sign-in" className="button-blue">Login</Button>
                    </SignedOut>
                    <SignedIn>
                        <Button color="inherit" href="/flashcards" sx={{ mr: 2 }}>My Cards</Button>
                        <UserButton />
                    </SignedIn>
                </div>
                
            </Toolbar>
        </AppBar>
    );
}