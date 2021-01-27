import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import { ProductNav } from '../../Elements/ProductNav/ProductNav';
import { ProductList } from '../../Elements/ProductList/ProductList';
import styles from './Products.module.scss';
import { ProductDetails } from '../../Elements/ProductDetails/ProductDetails';

export const Products = () => {

    let { url } = useRouteMatch();

    return (
        <div className="container">
            <div>
                <h1>Vores elskede bagværk...</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, perferendis porro libero tempora rerum quo explicabo nisi excepturi consectetur dolorem veritatis incidunt eligendi? Vel accusantium atque et pariatur quaerat in.</p>
            </div>

            <div className={`${styles.catalog} grid`}>

                <aside>
                    <ProductNav />
                </aside>
                <section>
                    <Switch>
                        <Route exact path={url}>
                            <Redirect to={`${url}/1`}></Redirect>
                        </Route>

                        <Route exact path={`${url}/:categoryId`}>
                            <ProductList />
                        </Route>
                        <Route exact path={`${url}/:categoryId/:productId`}>
                            <ProductDetails />
                        </Route>
                    </Switch>

                </section>
            </div>
        </div>
    )
}