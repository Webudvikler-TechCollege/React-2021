import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getAuthData, postAuthData, deleteAuthData } from '../../helpers/fetch'
import { Comment } from './Comment'
import Style from './comments.module.scss'

export function CommentSection (props) {

    // Hent vores produkt id fra router params
    let { productId } = useParams()

    // States til at gemme comments array, vores input comment og titel
    let [comments, setComments] = useState()
    let [comment, setComment] = useState('')
    let [title, setTitle] = useState('')
    
    let loginData = props.loginData
    let username = props.loginData.username
    
    // Funktion til at hente alle kommentarer ud
    const getComments = async () => {
        let key = loginData.access_token
        let url = `https://api.mediehuset.net/bakeonline/comments/${productId}`
        let res = await getAuthData(url, key)
        console.log(res)
        setComments(res)
    }
    
    // useEffect der henter vores kommentarer
    useEffect(() => {   
        if (username){
            getComments()
        }
    }, [username])

    // funktion til at sende kommentarer - kører kun når comment og title er større en 0 og sender formData med
    const sendComment = async (e) => {

        if (comment.length > 0 && title.length  > 0){
            e.preventDefault()
            let url= `https://api.mediehuset.net/bakeonline/comments`
            let formData = new FormData()
            let key = loginData.access_token
            formData.append('title', title)
            formData.append('comment', comment)
            formData.append('user_id', loginData.user_id)
            formData.append('product_id', productId)
            formData.append('active', 'true')

            let res = await postAuthData(url, key, formData)
            console.log(res)
            setTitle('')
            setComment('')
            getComments()
        }

            else {
                e.preventDefault()
            }
        }
        
    // Funktion til at slette kommentarer (bruger id vi passer med ind i vores Comment komponent)
    const deleteComment = async (id) => {
        let key = loginData.access_token
        let url = `https://api.mediehuset.net/bakeonline/comments/${id}`
        let res = await deleteAuthData(url, key)
        console.log(res)
        getComments()
        }

        // Returnerer vores kommentarer + form når brugeren er logget ind, ellers returnerer besked
    return (
        props.loginData.username ? 
        <>
        <section className={Style.commentInput}>
            <div>
                <h3>kommentar</h3>
            </div>

            <form>
                <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} placeholder="Titel"></input>
                <input type='text' value={comment} onChange={(e) => {setComment(e.target.value)}} placeholder="fortæl os hvad du syntes.."></input>
                <button onClick={(e) => sendComment(e)}>Indsæt</button>
            </form>
        </section>

        {comments && comments.items && comments.items.slice(0).reverse().map((item, i ) => {
            return <Comment username={loginData.username} delete={deleteComment} key={i} comment={item}/>
        })}
        </>   
        :
        <h3>Du skal logge ind for at kunne kommentere</h3>
    )
}