import React from 'react'
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export function Frontpage() {

    // Opret array med kategorier 
    const categories = [
        {title: "Bukser", id: 1},
        {title: "Sko", id: 2},
        {title: "Jakker", id: 3},
        {title: "Skjorter", id: 4},
        {title: "Hatte", id: 5},
    ]

    // Destructure (importer) path fra useRouteMatch hook
    // path = den sti vi står på, på det pågældende tidspunkt, her /forside
    const { path } = useRouteMatch()

    // console.log('path is : ' + path)
 
    return(
        <>
        <Header/>
            <h2>Dette er vores forside</h2>
            <h4>Her finder du vores kategorier</h4>
            
            { // Map categorier ud og returner et Link object (a tag) med en 'to' property tilsvarende titlen på hvert object
                categories.map((item) => {
                    return (
                        <Link key={item.id} style={{margin: "8px"}} to={`${path}/${item.title.toLowerCase()}`}>{item.title}</Link>
                    )
                })
            }

        <Switch>
            {/* Hvis vi står på den exacte path, altså /forside */}
            <Route exact path={path}>
                <p>Vælg en kategori</p>
            </Route>
            {/* Hvis vi står på /forside efterfulgt af et parameter vi kalder categorie, render Categorie komponentet */}
            <Route exact path={`${path}/:categorie`}>
                <Categorie categories={categories}/>
            </Route>
        </Switch>
        <Footer/>
        </>
    )
}

export function Categorie(props){
    // useParams hook returnerer et object med key value pairs af vores url parametre. 
    // Her vil vi have categorie
    const { categorie } = useParams()

    // console.log('categorie is : ' + categorie)


    // Her looper vi igennem categories og laver et tjek på
    // om den valgte categorie faktisk findes. Ellers kan man ændre URL´en
    // til eks. 'bukserne' og så renderer siden også 'buksere'
    return (
        props.categories.map((item) => {
            return item.title.toLowerCase() === categorie ?
            <div key={item.id}><h3>Du har valgt: {categorie}</h3></div> :
            null
        })
    )
}