import React from "react";
import Typed from "typed.js";

function TextAnimation() {
  // Create reference to store the DOM element containing the animation
  const element = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(element.current, {
      strings: [
        "Seller Account Management",
        "Product Hunting",
        "Product Listing",
        "Listing Optimization",
        "Launching and Ranking",
        "Keyword Research",
        "Competitor Analysis",
        "PPC(Pay Per Click)",
        "Coupons and Promotions Creations",
      ],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={element} />
    </div>
  );
}

export default TextAnimation;
