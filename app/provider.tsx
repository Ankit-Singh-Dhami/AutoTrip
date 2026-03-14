"use client";

import { useUser } from "@clerk/nextjs";
import { useContext, useEffect, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { UserDetailContext } from "@/context/UserDetailContext";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoaded } = useUser();
  const createUser = useMutation(api.users.createUser);
  const [userDetail, setUserDetail] = useState<any>();

  useEffect(() => {
    if (isLoaded && user) {
      createNewUser();
    }
  }, [isLoaded, user]);

  const createNewUser = async () => {
    if (user && user.primaryEmailAddress?.emailAddress) {
      const result = await createUser({
        name: user.fullName ?? "Anonymous",
        email: user.primaryEmailAddress.emailAddress,
        imageURL: user.imageUrl,
        subscription: "free",
      });

      console.log("User created in Convex DB:", result);
    }
  };

  return (
    <>
      <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
        {children}
      </UserDetailContext.Provider>
    </>
  );
};

export default Provider;

export const useUserDetail = () => {
  return useContext(UserDetailContext);
};
