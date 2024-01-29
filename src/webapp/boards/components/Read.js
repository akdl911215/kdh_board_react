import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ReadAPI } from "../../api/BoardApi";

const Read = () => {
  const navigate = useNavigate();
  const { idx } = useParams();

  const [board, setBoard] = useState({
    title: "",
    content: "",
    writerEmail: "",
    writerName: "",
  });
  const { title, content, writerEmail, writerName } = board;

  useEffect(() => console.log(board), [board]);
  useEffect(() => {
    ReadAPI(idx)
      .then((res) => {
        console.log("read res : ", res);

        setBoard({
          title: res?.data?.title,
          content: res?.data?.content,
          writerEmail: res?.data?.writerEmail,
          writerName: res?.data?.writerName,
        });
      })
      .catch((err) => console.error(err));
  }, []);

  const backList = () => navigate("/");

  const modifyButton = () => navigate(`/modify/${idx}`);

  return (
    <>
      <div>
        <span>제목</span>
        <input type="text" name="title" value={title} disabled={true} />
      </div>
      <br />
      <div>
        <span>작성자</span>
        <input
          type="text"
          name="writerName"
          value={writerName}
          disabled={true}
        />
      </div>
      <div>
        <span>email</span>
        <input
          type="text"
          nam="writerEmail"
          value={writerEmail}
          disabled={true}
        />
      </div>
      <div>
        <span>내용</span>
        <textarea
          name="content"
          cols="30"
          rows="10"
          value={content}
          disabled={true}
        />
      </div>
      <br />
      <div>
        <button onClick={modifyButton}>수정</button>
        <button onClick={backList}>뒤로</button>
      </div>
    </>
  );
};

export default Read;
