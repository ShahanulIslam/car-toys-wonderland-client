import useTitle from "../../../Hook/useTitle";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Gallery from "../Gallery/Gallery";
import Newsletter from "../Newsletter/Newsletter";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    useTitle("Home")

    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Categories></Categories>
            <Reviews></Reviews>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;