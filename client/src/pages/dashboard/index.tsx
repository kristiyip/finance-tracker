import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";

export const Dashboard = (): React.ReactElement => {
  const { user } = useUser();

  console.log(user)
  return (
    <div>
      <h1>Welcome {user?.firstName ? user.firstName : user?.username}! Here are Your Finances: </h1>
      <FinancialRecordForm />
      <FinancialRecordList />
    </div>
  )
}