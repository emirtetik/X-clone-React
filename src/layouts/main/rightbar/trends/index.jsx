import { topics } from "~/utils/consts";
import Topic from "./topic";
import RightbarSection from "~/components/RightbarSection";
export default function Trends() {
  return (
    <RightbarSection title="ilgini çekebilicek gündemler" more="/trends">
 {topics.map((topic, i) => (
          <Topic key={i} item={topic} />
        ))}
    </RightbarSection>
  );
}
