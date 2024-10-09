import { 
  SignedIn,
  SignedOut, 
  SignInButton, 
  SignUpButton
} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export const Auth = (): React.ReactElement => {
  return (
    <div>
      <SignedOut>
        <SignUpButton mode="modal" />
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <Navigate to="/" />
      </SignedIn>
    </div>
  )
}