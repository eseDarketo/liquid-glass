import GlassCard from "@/components/GlassCard";
import styles from "../page.module.css";
import { Heading } from "@once-ui-system/core";

export default function Home() {
  return (
    <div className={styles.page}>
        <GlassCard>
            <Heading variant="heading-strong-xl" as="h2">
                Some say we walk alone<br />
                Barefoot on wicked stone, no light<br />
                And sactuary found never waits around awhile<br /><br />
            </Heading>
        </GlassCard>
    </div>
  );
}
