"use client";

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { useAuth } from "@/hooks/useAuth";
// import { useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import { BiLoaderAlt } from "react-icons/bi";

export default function Home() {
    // const { loading,handleLogout } = useAuth();
    // const { currentUser } = useAppSelector((state) => state.appSlice);

    return(
        <main className="flex min-h-screen justify-center items-center bg-gradient-to-t from-pink-400 to-purple-500 flex-col gap-3">
            <h1 className="font-bold text-4xl text-white"> Task Tracker</h1>
            {/* {!currentUser && !}         */}
        </main>
    )
}