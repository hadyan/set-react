import { useEffect } from "react";
import { useLocation } from "react-router-dom";
var transition, transitioning;
var routeStack = [];
var currentRoute = "";

const getSharedElements = () => {
  const tx = {};
  for (const el of document.querySelectorAll("[tx]")) {
    tx[el.getAttribute("tx")] = el;
  }
  return tx;
};

export const prePareTransition = (location) => {

  if (!document.documentTransition) {
    return;
  }
  let isPop = false;
  const { pathname } = location;
  currentRoute = pathname;
  if (routeStack.includes(pathname)) {
    isPop = true;
    routeStack = routeStack.filter((itm) => itm !== pathname);
  } else {
    routeStack.push(pathname);
  }

  if (transitioning || transition){
    console.info("safe guard");
    return;
  }
  transitioning = getSharedElements();

  console.info("prep:", Object.values(transitioning));

  const transition_effect = !isPop ? "reveal-left" : "reveal-right";
  //console.info(transition_effect)
  transition = document.documentTransition.prepare({
    //duration: !isPop ? 2000 : 500,
    //rootTransition: !isPop ? "reveal-left" : "reveal-right",
    rootTransition: transition_effect,
    sharedElements: Object.values(transitioning),
  });
};

const Transition = () => {
  const location = useLocation();

  useEffect(() => {
    prePareTransition(location);
  }, []);

  useEffect(() => {
    (async () => {
      const { pathname } = location;
      if (pathname === currentRoute) {
        return null;
      }
      console.info("transition", transition, transitioning);

      if (!transitioning || !transition){
        console.info("safe guard2");
        return;
      }
      //console.info("do transition");
      await transition;
      const els = getSharedElements();
      const sharedElements = Object.keys(transitioning).map((tx) => els[tx]);
      transition = document.documentTransition.start({ sharedElements });
      await transition;
      transitioning = transition = null;
      prePareTransition(location);
    })();
  }, [location]);

  return null;
};

export default Transition;
