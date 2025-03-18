import "./index.scss";
import ModalComponent from "../Modal";
import { useState } from "react";
import { postStatus } from "../../../api/FirestoreAPI";
function PostStatus() {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const sendStatus = async () => {
    await postStatus(status);
    await setModalOpen(false);
    await setStatus("");
  };
  return (
    <div className="post-status-main">
      <div className="post-status">
        <button className="open-post-model" onClick={() => setModalOpen(true)}>
          Start a Post
        </button>
      </div>
      <ModalComponent
        setStatus={setStatus}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        status={status}
        sendStatus={sendStatus}
      />
    </div>
  );
}

export default PostStatus;
