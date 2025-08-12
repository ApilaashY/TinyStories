import { Link } from "react-router-dom";
import "./StoryDetail.css";

export default function StoryDetail({
  title,
  description,
  episodes,
  storyId,
}: {
  title: string;
  description: string;
  episodes: number;
  storyId: string;
}) {
  return (
    <div className="story-detail">
      <div className="story-detail-card">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="story-detail-card">
        {Array.from({ length: episodes }, (_, i) => (
          <Link to={`/stories/${storyId}/episode/${i + 1}`} key={i}>
            <h2>Episode {i + 1}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
