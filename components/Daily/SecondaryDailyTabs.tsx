import { SecondaryDailyTabsHabits } from "./SecondaryDailyTabs/Habits";
import { SecondaryDailyTabsTasks } from "./SecondaryDailyTabs/Tasks";

interface secondaryDailyTabsProps {
  componentUsing?: string;
}

export const SecondaryDailyTabs = ({ componentUsing }: secondaryDailyTabsProps) => {
  
  if (componentUsing === "Habits") {
    return <SecondaryDailyTabsHabits />;
  }
  else if (componentUsing === "Tasks") {
    return <SecondaryDailyTabsTasks />;
  }
};
