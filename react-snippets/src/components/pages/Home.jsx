import { useEffect, useState } from "react";
import { fetch2api } from "../../helpers/helpers";
import { Footer } from "../partials/Footer"
import { Header } from "../partials/Header"

export const Home = () => {
    const [songList, setSongList] = useState([]);

    const getSongList = async () => {
        const url = "https://api.mediehuset.net/sdg/goals";
        const result = await fetch2api(url);
        setSongList(result);
    }

    useEffect(() => {
        getSongList();
    }, [])

    console.log(songList);

    return (
        <>
            <Header title="Velkommen til min React App" subtitle="Dette er et react project" />
            <main>
            {songList && songList.items && songList.items.map((item, i) => {
                console.log(item)
                return (
                    <li key={item.id}>{item.title}</li>
                )
            })

            }
            </main>
            <Footer />
        </>
    )
}