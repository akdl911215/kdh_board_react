import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ModifyAPI, ReadAPI } from "../../api/BoardApi";

const Modify = () => {
  const navigate = useNavigate();
  const { idx } = useParams();

  const [board, setBoard] = useState({
    id: idx,
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
        console.log("res?.data : ", res?.data);

        setBoard({
          id: res?.data?.id,
          title: res?.data?.title,
          content: res?.data?.content,
          writerEmail: res?.data?.writerEmail,
          writerName: res?.data?.writerName,
        });
      })
      .catch((err) => console.error(err));
  }, []);

  const backList = () => navigate("/");

  const modifyButton = () => {
    ModifyAPI(board)
      .then((res) => {
        console.log("res?.data : ", res?.data);

        if (res.status === 200) {
          alert("수정이 완료되었습니다.");
          navigate("/");
        }
      })
      .catch((err) => console.error(err));
  };

  const onChange = (event) => {
    const { value, name } = event.target;

    setBoard({
      ...board,
      [name]: value,
    });
  };

  return (
    <>
      <div>
        <span>제목</span>
        <input type="text" name="title" value={title} onChange={onChange} />
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
          onChange={onChange}
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

export default Modify;
