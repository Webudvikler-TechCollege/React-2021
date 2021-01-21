import { CategoryList } from '../../Elements/CategoryList/CategoryList';
import { ProductList } from '../../Elements/ProductList/ProductList';

export const Products = () => {
    return (
        <>
            <h1>Vores elskede bagværk</h1>

            <div>
                <aside>
                    <CategoryList />
                </aside>
                <section>
                    <ProductList />
                </section>
            </div>
        </>
    )
}