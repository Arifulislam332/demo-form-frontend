"use client";

import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const HomePage = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <Button onClick={async () => loginWithRedirect()} size="lg">
        Click here
      </Button>
    </div>
  );
};

export default HomePage;
