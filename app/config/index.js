const app = {
  db: {
    host: "ds151461.mlab.com",
    port: 51461,
    name: "server",
    username: "admin",
    password: "a12345677"
  },
  jwt: {
    APP_SECRET: "HATEYOU",
    EXPIRE_IN: "7d"
  }
};

export const database = app.db;
export default app;
