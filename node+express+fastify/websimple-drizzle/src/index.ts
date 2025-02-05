import http from "http";
import User from "./models/User";

const server = http.createServer(async (req, res) => {
  // get all users
  if (req.url === "/users" && req.method === "GET") {
    const users = await new User().all();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));

    // get single user
  } else if (req.url?.startsWith("/users/") && req.method === "GET") {
    const id = req.url.split("/")[2];
    const user = await new User().get(Number(id));

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(user));

    // create user
  } else if (req.url === "/users" && req.method === "POST") {
    const body: any = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", async () => {
      const user = JSON.parse(Buffer.concat(body).toString());
      await new User().create(user);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(user));
    });

    // delete user
  } else if (req.url?.startsWith("/users/") && req.method === "DELETE") {
    const id = req.url.split("/")[2];

    await new User().delete(Number(id));
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end();

    // update user
  } else if (req.url?.startsWith("/users/") && req.method === "PUT") {
    const id = req.url.split("/")[2];
    const body: any = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", async () => {
      const user = JSON.parse(Buffer.concat(body).toString());
      await new User().update(Number(id), user);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(user));
    });

    // 404
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening on http://127.0.0.1:8000");
});
