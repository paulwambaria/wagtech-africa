// Upload files to Vercel Blob
// Usage: VERCEL_TOKEN=vcp_xxx node scripts/upload-blobs.mjs
const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const STORE_ID = "store_9J9MsMSKPzEM96GL";

if (!VERCEL_TOKEN) {
  console.error("Set VERCEL_TOKEN env var");
  process.exit(1);
}

console.log("Blob store:", STORE_ID);
console.log("Set BLOB_READ_WRITE_TOKEN in Vercel dashboard to enable file uploads.");
