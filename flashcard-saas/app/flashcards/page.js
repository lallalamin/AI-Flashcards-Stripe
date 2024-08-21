'use client'
import { useUser } from "@clerk/nextjs"
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import { collection, writeBatch, doc, setDoc, getDoc } from 'firebase/firestore'
import { db } from "@/firebase"
import { Container, Grid, Card, CardActionArea, CardContent, Typography } from "@mui/material"
import NavigationBar from "@/component/NavigationBar"


export default function Flashcards(){
    const {isLoaded, isSignedIn, user} = useUser()
    const [flashcards, setFlashcards] = useState([])
    // const [flipped, setFlipped] = useState([])
    // const [text, setText] = useState('')
    // const [name, setName] = useState('')
    // const [open, setOpen] = useState('')
    const router = useRouter()

    useEffect(() => {
        async function getFlashcards(){
            if(!user) return
            const docRef = doc(collection(db, 'users'), user.id)
            const docSnap = await getDoc(docRef)

            if(docSnap.exists()){
                const collections = docSnap.data().flashcards || []
                setFlashcards(collections)
            }
            else{
                await setDoc(docRef, {flashcards: []})
            }
        }
        getFlashcards()
       
    }, [user])

    if(!isLoaded || !isSignedIn){
        return <></>
    }

    const handleCardClick = (id) =>{
        router.push(`/flashcard?id=${id}`)
    }

    return(
        <main>
            <NavigationBar></NavigationBar>
        <Container maxwidth="vw">
            <Typography variant="h3" sx={{ marginTop: '50px', fontWeight: 600}}>
                Your Flashcard
            </Typography>
            <Grid container spacing={3} sx={{ mt: 4 }}>
            {flashcards.map((flashcard, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                    <CardActionArea onClick={() => handleCardClick(flashcard.name)}>
                    <CardContent>
                        <Typography variant="h6">
                            {flashcard.name}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>
            ))}
            </Grid>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <img 
                src="\blueSquare.png" 
                width="400px" 
                style={{ padding: '0 0 0 50px' }} 
                />
            </div>
        </Container>
        </main>
    )
}