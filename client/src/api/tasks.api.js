import axios from "axios";

const URL =
  process.env.NODE_ENV === "production"
    ? import.meta.env.VITE_BACKEND_URL
    : "http://localhost:8000";

const taskApi = axios.create({
  baseURL: `${URL}/tasks/api/v1/tasks/`
});

export const getAllTasks = () => taskApi.get("/");

export const getTask = (id) => taskApi.get(`/${id}/`);

export const createTask = (task) => taskApi.post("/", task);

export const deleteTask = (id) => taskApi.delete(`/${id}`);

export const updateTask = (id, task) => taskApi.put(`/${id}/`, task);
