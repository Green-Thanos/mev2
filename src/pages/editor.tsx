import { useState } from "react";

export default function PrivatePage(props) {
  const [content, setContent] = useState("");

  const uploadToServer = async (event) => {
    const body = new FormData();
    body.append("data", content);
    const response = await fetch("/api/savePost", {
      method: "POST",
      body
    });
  };

  return (
    <div>
        
        <button
            className="btn btn-primary"
            type="submit"
            onClick={uploadToServer}
        >
            Send to server
        </button>
      
    </div>
  );
}
