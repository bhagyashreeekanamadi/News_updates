import { FeedPage } from "@/components/feed-page";
import { getUpdatesByCategory } from "@/lib/updates";

export default function CybersecurityPage() {
  return (
    <FeedPage
      activeCategory="Cybersecurity"
      updates={getUpdatesByCategory("Cybersecurity")}
    />
  );
}
