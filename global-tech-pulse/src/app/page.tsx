import { FeedPage } from "@/components/feed-page";
import { updates } from "@/lib/updates";

export default function Home() {
  return <FeedPage updates={updates} />;
}
