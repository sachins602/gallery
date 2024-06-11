"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export default function TopNav() {
  const router = useRouter();
  return (
    <nav className="flex flex-row items-center justify-between ">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={() => {
            router.refresh();
          }}
        />
        <UserButton />
      </SignedIn>
    </nav>
  );
}
