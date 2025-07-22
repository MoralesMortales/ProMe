import { SecundaryDailyTabsHabits } from "./SecundaryDailyTabs/Habits";

interface SecundaryDailyTabsProps {
  componentUsing?: string;
}

export const SecundaryDailyTabs = ({ componentUsing }: SecundaryDailyTabsProps) => {
  
  if (componentUsing === "Habits") {
    return <SecundaryDailyTabsHabits />;
  }
  else if (componentUsing === "Tasks") {
    return <SecundaryDailyTabsHabits />;
  }
};
