import Image from "next/image";
import styles from "./page.module.css";
import GlassCard from "@/components/GlassCard";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.dots}>
        <h1>
          Some say we walk alone<br/>
          Barefoot on wicked stone, no light<br/>
          And sactuary found never waits around awhile<br/><br/>
        </h1>
        <GlassCard />
      </div>
    </div>
  );
}
