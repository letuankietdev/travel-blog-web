import { blue, blueGrey, green, orange, pink, red } from "@material-ui/core/colors";
import { CardTravelRounded, Favorite, PeopleAltTwoTone, RateReview, RestaurantMenuTwoTone, RestaurantTwoTone, VideoLabel } from "@material-ui/icons";
import HomePage from "modules/home";

export const RouteMain = [
  {
    nameScreen: "Home Page",
    path: "/home",
    element: <HomePage />, 
  },
  {
    nameScreen: "Home Page",
    path: "/",
    element: <HomePage />, 
  }
]

export const RouteLeftMenu = [
  {
    nameScreen: "Friends",
    path: "/friends",
    icon: <PeopleAltTwoTone style={{ color: green[500]}}/>
  },
  {
    nameScreen: "Watch",
    path: "/video",
    icon: <VideoLabel style={{ color: red[500]}}/>
  },
  {
    nameScreen: "Favorite Tourist Area",
    path: "/favaritetouristare",
    icon: <><CardTravelRounded style={{ color: blue[500]}} /></>
  },
  {
    nameScreen: "My Restaurant",
    path:'/myrestaurant',
    icon: <RestaurantTwoTone style={{ color: orange[500]}}/>
  },
  {
    nameScreen: "My Reviewer",
    path:'/myreviewer',
    icon: <RateReview style={{ color: pink[500]}} />
  }
]