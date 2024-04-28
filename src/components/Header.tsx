"use client";

import { useAuth0 } from "@auth0/auth0-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const Header = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <header className="w-full bg-pink-500 text-white border-b-2 h-[82px] flex items-center">
      <div className="flex items-center justify-between container mx-auto">
        <Link href="/" className="font-bold text-2xl">
          Home
        </Link>

        <div>
          {isAuthenticated ? (
            <span className="flex items-center gap-3">
              <Link href="/user-profile">
                <Avatar className="bg-pink-500">
                  <AvatarImage src={user?.picture} />
                  <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
                </Avatar>
              </Link>

              <Button
                onClick={() => logout()}
                size="sm"
                variant="ghost"
                className="font-bold hover:bg-pink-500"
              >
                Log Out
              </Button>
            </span>
          ) : (
            <Button
              onClick={async () => loginWithRedirect()}
              variant="ghost"
              size="lg"
              className="font-bold hover:bg-pink-500"
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
