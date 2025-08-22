import { useEffect } from "react";

import ResumePage from "./resumePage";
export default function PrintPage() {
  useEffect(() => {
    window.print();
  }, []);
  return (
    <div className="print-solo">
      <ResumePage />
    </div>
  );
}
