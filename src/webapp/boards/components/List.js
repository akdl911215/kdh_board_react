import React, { useEffect, useState } from "react";
import { ListAPI } from "../../api/BoardApi";
import { useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  useEffect(() => {
    ListAPI(1, 10)
      .then((res) => {
        const response = res?.data?.dtoList;
        const resList = response ? response : [];
        setList(resList);
      })
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => console.log(list), [list]);

  const modifyButton = (boardId) => {
    navigate(`/read/${boardId}`);
  };

  return (
    <>
      <div>
        <h2>Board List</h2>
        <div style={{ width: 500 }}>
          <div>
            <div style={{ display: "flex", padding: 15 }}>
              <div></div>
              <div style={{ paddingLeft: 10, paddingRight: 10 }}>
                게시판 번호
              </div>
              <div style={{ paddingLeft: 10, paddingRight: 10 }}>제목</div>
              <div style={{ paddingLeft: 40, paddingRight: 40 }}>작성자</div>
            </div>
            {list?.map((el) => (
              <div style={{ display: "flex" }} key={el.id}>
                <input
                  type="checkbox"
                  onChange={() => console.log("onChange")}
                />
                <div
                  onClick={() => modifyButton(el.id)}
                  style={{ paddingLeft: 20, paddingRight: 20 }}
                >
                  {el.id}
                </div>
                <div
                  onClick={() => modifyButton(el.id)}
                  style={{ paddingLeft: 20, paddingRight: 20 }}
                >
                  {el.title}
                </div>
                <div
                  onClick={() => modifyButton(el.id)}
                  style={{ paddingLeft: 20, paddingRight: 20 }}
                >
                  {el.writerName}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <button>작성</button>
          <button>삭제</button>
        </div>
      </div>
    </>
  );
};

export default List;
