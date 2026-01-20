export async function parseXmlBlob(blob: Blob): Promise<string> {
  const text = await blob.text();
  return text;
}

export async function parseXmlBlobToDocument(blob: Blob): Promise<XMLDocument> {
  const text = await blob.text();
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(text, "application/xml");
  return xmlDoc;
}