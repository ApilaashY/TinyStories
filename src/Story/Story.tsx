import { Link, useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./Story.css";
import { store } from "../store";
import { doc, getDoc } from "firebase/firestore";
import { fdb } from "../App/firebase";
import { useEffect, useState } from "react";

export default function StoryDetail() {
  const [showNext, setShowNext] = useState<boolean>(true);
  const [text, setText] = useState<string>("");

  const params = useParams();

  const episode = parseInt(params.episode ?? "0");

  useEffect(() => {
    async function checkEpisode() {
      if (!params.storyId) {
        setShowNext(true);
        return;
      }

      let maxEpisodes = store.getState().maxEpisodes[params.storyId];

      if (maxEpisodes === null || maxEpisodes === undefined) {
        let data = await getDoc(doc(fdb, "Stories", params.storyId));
        if (data.exists()) {
          maxEpisodes = data.data().episodes;
          setShowNext(episode >= maxEpisodes);
          return;
        }
      }

      if (maxEpisodes === null || maxEpisodes === undefined) {
        setShowNext(true);
        return;
      }

      setShowNext(episode >= maxEpisodes);
    }

    async function getText() {
      const data = await getDoc(
        doc(fdb, "Stories", params.storyId ?? "", episode.toString(), "data")
      );

      if (data.exists()) {
        setText(data.data().text);
      }
    }

    getText();
    checkEpisode();
  }, [episode]);

  return (
    <>
      <NavBar />

      <p className="story-body">{text}</p>

      <div className="story-navigation">
        <Link
          to={`/stories/${params.storyId}/episode/${episode - 1}`}
          className={`story-nav-button ${episode <= 1 ? "kill-button" : ""}`}
        >{`< Episode ${episode - 1}`}</Link>
        <Link
          to={`/stories/${params.storyId}/episode/${episode + 1}`}
          className={`story-nav-button ${showNext ? "kill-button" : ""}`}
          onClick={() => setShowNext(true)}
        >{`Episode ${episode + 1} >`}</Link>
      </div>
    </>
  );
}
