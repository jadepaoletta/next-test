import Link from "next/link";
import { createClient } from "redis";

const redisClient = createClient({
  url: process.env.REDIS_URL,
  socket: {
    family: 6,
  },
})
  .on("error", (err) => console.log("Redis Client Error", err))
  .connect();

  
await client.set('key', 'value');
const value = await client.get('key');
await client.disconnect();

export default function Home() {
  return (
    <div>
      Home page
      <Link href="/about">About</Link>
    </div>
  );
}
