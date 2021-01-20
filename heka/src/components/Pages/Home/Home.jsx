import { News } from '../../Elements/News/News'
import { SignUp } from '../../Elements/SignUp/SignUp'
import { ProductList } from '../../Elements/ProductList/ProductList'

export const Home = () => {

    return (
        <>
            <section className="container">
                <h1>Velkommen til bageriet</h1>
                <News />
            </section>
            <SignUp />
            <section className="container">
                <ProductList />
            </section>
        </>
    )
}