import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RefObject } from "react";

export const useTransactionCardsStagger = (containerRef: RefObject<HTMLElement>) => {
  useGSAP(
    () => {
      const cards = containerRef.current?.querySelectorAll(".transaction-item");
      
      if (!cards || cards.length === 0) return;

      gsap.fromTo(
        cards,
        {
          y: -24,
        },
        {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.1,
        }
      );
    },
    { scope: containerRef }
  );
};
