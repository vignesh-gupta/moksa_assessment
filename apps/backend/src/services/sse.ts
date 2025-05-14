type SSEClient = {
  id: number;
  res: any;
};

let clients: SSEClient[] = [];

export const addClient = (req: any, res: any) => {
  const clientId = Date.now();
  clients.push({ id: clientId, res });

  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
    "Cache-Control": "no-cache",
  });

  console.log("New client connected:", clientId);
  

  res.write(`event: connected\ndata: Connected\n\n`);

  req.on("close", () => {
    clients = clients.filter((c) => c.id !== clientId);
  });
};

export const sendEventToClients = (data: any) => {
  clients.forEach((client) => {
    client.res.write(`event: update\ndata: ${JSON.stringify(data)}\n\n`);
  });
};
