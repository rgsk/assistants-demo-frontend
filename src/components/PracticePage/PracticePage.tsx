import { ModeToggle } from "../ModeToggle/ModeToggle";
import { Button } from "../ui/button";

interface PracticePageProps {}
const PracticePage: React.FC<PracticePageProps> = ({}) => {
  return (
    <div>
      <p className="text-lg font-medium">Practice Page</p>
      <ModeToggle />
      <Button>Shadcn Button</Button>
    </div>
  );
};
export default PracticePage;
