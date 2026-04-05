"use client";
import { SignIn, SignOutButton, useAuth } from '@clerk/nextjs'

export default function Page() {
  const { isSignedIn} = useAuth();
  return (
    <>
      { isSignedIn ? (
        <div>
          <p>You are already signed in </p>
          <SignOutButton>Sign Out</SignOutButton>
        </div>
      ) : (
        <SignIn />
      )}
    </>
  );
}