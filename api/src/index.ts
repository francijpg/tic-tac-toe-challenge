import app from "./app";
import config from "./config/secrets";
import "./config/database";

const { PORT, API_VERSION } = config;

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}${API_VERSION}`);
});