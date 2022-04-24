export function log(err: any) {
  if (err instanceof Error) {
    send(err.toString());
  }
}

export function send(str: string) {
  console.log(str);
}
