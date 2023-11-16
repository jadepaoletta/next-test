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


await redisClient.set('key', 'value');
const value = await client.get('key');
await redisClient.disconnect();

export default function Home() {
  return (
    <div>
      Home page
      <Link href="/about">About</Link>
    </div>
  );
}
