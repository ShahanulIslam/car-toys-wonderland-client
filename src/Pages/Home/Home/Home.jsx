import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Gallery from "../Gallery/Gallery";

const Home = () => {
    useTitle("Home")

    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Categories></Categories>
        </div>
    );
};

export default Home;