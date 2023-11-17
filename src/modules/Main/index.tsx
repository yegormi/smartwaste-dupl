import withPrivateRoute from "hocs/withPrivateRoute";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUserDataServer } from "redux/actions/userActions";
import { useEffect } from "react";
import { getHydrated, getLoaders } from "redux/reducers/appReducer";
import { getIsAuthorized } from "redux/reducers/authReducer";
import BrandLoader from "components/Loader/BrandLoader";
import Header from "components/Header";
import { getBinsCoordinatesServer } from "redux/actions/coordinatesActions";
import { getAllBucketItemsServer } from "redux/actions/bucketActions";

const Main = () => {
  const dispatch = useDispatch();

  const isHydrated = useSelector(getHydrated);
  const isAuthorized = useSelector(getIsAuthorized);
  const loaders = useSelector(getLoaders);

  useEffect(() => {
    if (isHydrated && isAuthorized) {
      dispatch(getUserDataServer());
      dispatch(getBinsCoordinatesServer());
      dispatch(getAllBucketItemsServer());
    }
  }, [isAuthorized, isHydrated]);

  return (
    <>
      <Header />
      <BrandLoader show={loaders.self || loaders.scanImage || loaders.items} />
      <Outlet />
      <NavBar />
    </>
  );
};

export default withPrivateRoute(Main);
