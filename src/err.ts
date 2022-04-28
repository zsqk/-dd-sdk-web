export function log(err: any) {
  send(`${err}`);
  console.log(err);
}

let url = ``;
let dingkey = "";

export function init(p: { url: string; dingkey: string }) {
  url = p.url;
  dingkey = p.dingkey;
}

export async function send(str: string) {
  await fetch(url, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      msgtype: "text",
      text: { content: str + dingkey },
    }),
  }).then((r) => r.text());
}
