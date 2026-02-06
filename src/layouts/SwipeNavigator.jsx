import { useSwipeable } from "react-swipeable";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const routes = ["/", "/contacts", "/device", "/zone"];

const SwipeNavigator = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();

  const isRTL = i18n.dir() === "rtl";
  const currentIndex = routes.indexOf(location.pathname);
  const [direction, setDirection] = useState(0);

  const goNext = () => {
    if (currentIndex < routes.length - 1) {
      setDirection(1);
      navigate(routes[currentIndex + 1]);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      navigate(routes[currentIndex - 1]);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      isRTL ? goPrev() : goNext();
    },
    onSwipedRight: () => {
      isRTL ? goNext() : goPrev();
    },
    preventScrollOnSwipe: true,
    trackMouse: false,
  });

  return (
    <div {...handlers} style={{ height: "100%", overflow: "hidden" }}>
      {typeof children === "function"
        ? children(direction)
        : children}
    </div>
  );
};

export default SwipeNavigator;