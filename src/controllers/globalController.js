import bread from "../models/bread";

const homeController = (req, res) => {
    res.render("screens/home");
};

const breadController = async (req, res) => {
    const breadList = await bread.find({}, {});

    console.log(breadList);

    res.render("screens/bread", { breadList });
};

const globalController = {
    homeController,
    breadController,
};

export default globalController;