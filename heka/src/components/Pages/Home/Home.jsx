import { News } from '../../Elements/News/News'
import { SignUp } from '../../Elements/SignUp/SignUp'
import { LatestProducts } from '../../Elements/LatestProducts/LatestProducts'

export const Home = () => {

    return (
        <>
            <section className="container">
                <h1>Velkommen til bageriet</h1>
                <News />
            </section>
            <SignUp />
            <section className="container">
                <LatestProducts />
            </section>
        </>
    )
}