import React, { createContext, useContext, useState, ReactNode } from "react";
import { BookingResponse } from "../types/models";

interface BookingContextType {
  booking: BookingResponse | null;
  setBooking: (booking: BookingResponse | null) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [booking, setBooking] = useState<BookingResponse | null>(null);

  return (
    <BookingContext.Provider value={{ booking, setBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = (): BookingContextType => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};
