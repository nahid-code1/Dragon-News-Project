"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";

const TodayDate = () => {
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(format(new Date(), "EEEE, MMMM dd, yyyy"));
  }, []);

  return <p className="md:text-xl min-h-7">{today}</p>;
};

export default TodayDate;
