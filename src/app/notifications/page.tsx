"use client";
// Initialize the JS client
import {stringify} from "querystring";

import {createClient} from "@supabase/supabase-js";
import {useEffect, useState} from "react";
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!,
);

export default function NotificationPage() {
  const [notifications, setNotifications] = useState<
    {id: number; message: string; amount: number}[]
  >([]);

  useEffect(() => {
    supabase
      .channel("donations")
      .on("postgres_changes", {event: "INSERT", schema: "public"}, (change) => {
        setNotifications((notifications) => [
          ...notifications,
          change.new as {id: number; message: string; amount: number},
        ]);
        // console.log(change);
      })
      .subscribe();
  }, []);

  return <div>{JSON.stringify(notifications)}</div>;
}
