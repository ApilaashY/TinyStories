import "./App.css";
import StoryDetail from "./StoryDetail/StoryDetail";
import { useEffect, useRef, useState } from "react";
import { fdb } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import NavBar from "../NavBar/NavBar";
import { useDispatch } from "react-redux";
import { setMaxEpisodes } from "../store";

function App() {
  const dispatch = useDispatch();

  const [stories, setStories] = useState<any[]>([]);
  const loading = useRef(false);

  useEffect(() => {
    if (stories.length === 0 || !loading.current) {
      loading.current = true;

      async function getData() {
        const querySnapshot = await getDocs(collection(fdb, "Stories"));
        console.log(querySnapshot.docs.map((doc) => doc.ref.id));
        const storiesData = querySnapshot.docs.map((doc) => {
          dispatch(
            setMaxEpisodes({ id: doc.ref.id, value: doc.data().episodes })
          );
          return {
            ...doc.data(),
            id: doc.ref.id,
          };
        });

        setStories(storiesData);
      }

      getData();
    }
  }, [stories]);

  return (
    <>
      <NavBar />

      <h2 className="current-stories">Current Stories</h2>

      <div className="story-list">
        {stories.map(
          (story) => (
            console.log(story),
            (
              <StoryDetail
                key={story.id}
                title={story.title}
                description={story.description}
                episodes={story.episodes}
                storyId={story.id}
              />
            )
          )
        )}
      </div>
    </>
  );
}

export default App;
