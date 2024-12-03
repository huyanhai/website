export const textToBuffer = (text: string) => {
  const encoder = new TextEncoder();
  return new Uint8Array(encoder.encode(text).buffer);
};
