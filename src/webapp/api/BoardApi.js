import { client } from "./Client";

const backUrl = "http://127.0.0.1:8080";

export const ListAPI = (page = 1, size = 10) =>
  client.get(`${backUrl}/board/list?page=${page}&size=${size}`);

export const ReadAPI = (id) => client.get(`${backUrl}/board/read/${id}`);

export const ModifyAPI = (board) =>
  client.patch(`${backUrl}/board/update`, JSON.stringify(board));
