import useTitle from "../../../Hook/useTitle";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Gallery from "../Gallery/Gallery";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    useTitle("Home")

    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Categories></Categories>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;