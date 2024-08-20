import Image from "next/image";
import { AppBar, Container, Toolbar, Typography, Button, Box, Grid } from "@mui/material"
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Head from "next/head";
import CustomAppBar from "./navigation";

export default function Home() {
  return (
  <main> 
  <CustomAppBar/>
      <Head>
        <title>BrainCards</title>
        <meta name="description" content="Create flashcard from your text"></meta>
      </Head>
      <div id='header'>
        <Box sx={{textAlign: 'center', justifyContent: 'center'}}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Flashcard SaaS
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            The easiest way to create flashcards from your text.
          </Typography>
          <Button variant="contained" color="primary" sx={{mt: 2, mr: 2}} href="/generate">
            Get Started
          </Button>
          <Button variant="outlined" color="primary" sx={{mt: 2}}>
            Learn More
          </Button>
        </Box>
      </div>
      <Container>
        <Box sx={{my: 6}}>
          <Typography variant="h4" component="h2" gutterBottom>Features</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6">Easy Text Input</Typography>
              <Typography variant="h6">
                {' '}
                Simply input your text and let our software do the rest. 
                Creating flashcards has never be easier
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6">Smart Flashcards</Typography>
              <Typography variant="h6">
                {' '}
                Our AI intelligently break down your text into concise
                flashcards, great for studying
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6">Accessible Anywhere</Typography>
              <Typography variant="h6">
                {' '}
                Access your flashcards from any device, at any time.
                Study on the go with ease.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box sx={{my: 6, textAlign: 'center'}}>
        <Typography variant="h4" component="h2" gutterBottom>Pricing</Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Box sx={{
              p: 3,
              border: '1px solid', 
              borderColor: 'grey.300',
              borderRadius: 2,
            }}>
              <Typography variant="h5" gutterBottom>Basic</Typography>
              <Typography variant="h6" gutterBottom>$5/month</Typography>
                <Typography variant="h6">
                  {' '}
                  Access basic flashcard features and limited storage.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2}}>
                Choose basic
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{
              p: 3,
              border: '1px solid', 
              borderColor: 'grey.300',
              borderRadius: 2,
            }}>
              <Typography variant="h5" gutterBottom>Pro</Typography>
              <Typography variant="h6" gutterBottom>$10/month</Typography>
                <Typography variant="h6">
                  {' '}
                  Unlimited flashcards and storage, with priority support.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2}}>
                Choose pro
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </main>
    );
}
